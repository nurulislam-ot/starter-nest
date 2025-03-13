import { ZodSchema, ZodError } from 'zod';
import { BadRequestException, PipeTransform } from '@nestjs/common';

export class ZodValidationPipe<T> implements PipeTransform<T, T> {
  constructor(private schema: ZodSchema<T>) {}

  transform(value: T) {
    try {
      const parsedValue = this.schema.parse(value);
      return parsedValue;
    } catch (error) {
      if (error instanceof ZodError) {
        throw new BadRequestException(
          error.issues.map((issue) => issue.message),
        );
      }
      throw new BadRequestException(error);
    }
  }
}

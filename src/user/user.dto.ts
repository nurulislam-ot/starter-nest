import {
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @IsString({ always: true })
  @IsOptional({ groups: ['update'] })
  @Length(3, 10, { always: true })
  name: string;

  @IsInt({ always: true })
  @IsPositive()
  age: number;
}

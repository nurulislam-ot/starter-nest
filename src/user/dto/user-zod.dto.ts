import { z } from 'zod';

export const CreateUserSchema = z
  .object({
    name: z
      .string({
        required_error: 'name is required',
      })
      .min(3)
      .max(10),
    age: z.number().int().positive(),
  })
  .required();

export type CreateUserZodType = z.infer<typeof CreateUserSchema>;

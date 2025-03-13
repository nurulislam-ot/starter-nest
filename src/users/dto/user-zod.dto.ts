import { z } from 'zod';

export const CreateUserSchema = z
  .object({
    name: z
      .string({
        required_error: 'name is required',
      })
      .min(3),
    email: z
      .string({
        required_error: 'email is required',
      })
      .email(),
    password: z
      .string({
        required_error: 'password is required',
      })
      .min(6),
  })
  .required();

export type CreateUserZodType = z.infer<typeof CreateUserSchema>;

import { UserType } from '@/apis';
import { z } from 'zod';

export const registerSchema = z
  .object({
    email: z.email({ error: 'Please enter a valid email address' }).nonempty({ error: 'Email is required' }),
    password: z
      .string()
      .nonempty({ error: 'Password is required' })
      .min(8, { message: 'Password must be at least 8 characters long.' })
      .max(20, { message: 'Password cannot exceed 20 characters.' })
      .refine((password) => /[A-Z]/.test(password), { message: 'Password must contain an uppercase letter.' })
      .refine((password) => /[a-z]/.test(password), { message: 'Password must contain a lowercase letter.' })
      .refine((password) => /[0-9]/.test(password), { message: 'Password must contain a number.' })
      .refine((password) => /[!@#$%^&*]/.test(password), { message: 'Password must contain a special character.' }),
    confirmPassword: z.string().nonempty({ error: 'Please confirm your password' }),
    firstName: z.string().nonempty({ error: 'First name is required' }),
    lastName: z.string().nonempty({ error: 'Last name is required' }),
    phone: z.string().nonempty({ error: 'Phone number is required' }),
    userType: z.enum(UserType),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type RegisterSchemaValues = z.infer<typeof registerSchema>;

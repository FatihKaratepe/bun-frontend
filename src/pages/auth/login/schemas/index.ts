import { z } from 'zod';

export const loginSchema = z.object({
  email: z.email({ error: 'Please enter a valid email address' }).min(1, { error: 'Email is required' }),
  password: z.string().nonempty({ error: 'Password is required' }),
});

export type LoginSchemaValues = z.infer<typeof loginSchema>;

import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSeparator } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import { useLogin } from './api/mutations';
import { loginSchema, type LoginSchemaValues } from './schemas';

const LoginPage = () => {
  const { mutate: LoginMutation } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchemaValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: 'ahmet44@example.com',
      password: 'SecurePass321!',
    },
  });

  const onSubmit = (data: LoginSchemaValues) => {
    LoginMutation(
      { loginInput: data },
      {
        onSuccess: (resp) => {
          console.log(resp);
        },
      },
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-sm text-balance text-muted-foreground">Enter your email below to login to your account</p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="email@example.com" {...register('email')} />
          {errors.email && <FieldDescription className="text-red-500">{errors.email.message}</FieldDescription>}
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" {...register('password')} />
          {errors.password && <FieldDescription className="text-red-500">{errors.password.message}</FieldDescription>}
        </Field>
        <Field>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Loading...' : 'Login'}
          </Button>
        </Field>
        <FieldSeparator>Don&apos;t have an account?</FieldSeparator>
        <Field>
          <FieldDescription className="text-center">
            <Link to="../register">Sign up</Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
};

export default LoginPage;

import { PasswordStrengthMeter } from '@/components/PasswordStrengthMeter';
import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSeparator } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import { useRegister } from './api/mutations';
import { registerSchema, type RegisterSchemaValues } from './schemas';

const RegisterPage = () => {
  const { mutate: RegisterMutation } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<RegisterSchemaValues>({
    resolver: zodResolver(registerSchema),
  });
  const password = watch('password');

  const onSubmit = (data: RegisterSchemaValues) => {
    RegisterMutation(
      { registerInput: data },
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
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-sm text-balance text-muted-foreground">Fill in the form below to create your account</p>
        </div>
        <Field>
          <FieldLabel htmlFor="firstName">First Name</FieldLabel>
          <Input id="firstName" type="text" placeholder="First name" {...register('firstName')} />
          {errors.firstName && <FieldDescription className="text-red-500">{errors.firstName.message}</FieldDescription>}
        </Field>
        <Field>
          <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
          <Input id="lastName" type="text" placeholder="Last name" {...register('lastName')} />
          {errors.lastName && <FieldDescription className="text-red-500">{errors.lastName.message}</FieldDescription>}
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="email@example.com" {...register('email')} />
          {errors.email && <FieldDescription className="text-red-500">{errors.email.message}</FieldDescription>}
        </Field>
        <Field>
          <FieldLabel htmlFor="phone">Phone</FieldLabel>
          <Input id="phone" type="tel" placeholder="+90 555 555 5555" {...register('phone')} />
          {errors.phone && <FieldDescription className="text-red-500">{errors.phone.message}</FieldDescription>}
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input id="password" type="password" {...register('password')} />
          <PasswordStrengthMeter value={password} />
          {errors.password && <FieldDescription className="text-red-500">{errors.password.message}</FieldDescription>}
        </Field>
        <Field>
          <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
          <Input id="confirmPassword" type="password" {...register('confirmPassword')} />
        </Field>
        <Field>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Loading...' : 'Create Account'}
          </Button>
        </Field>
        <FieldSeparator>Already have an account?</FieldSeparator>
        <Field>
          <FieldDescription className="px-6 text-center">
            <Link to="../login">Sign in</Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
};

export default RegisterPage;

import { AuthApiFactory, type AuthApiAuthRegisterPostRequest } from '@/apis';
import { useMutation } from '@tanstack/react-query';

const AuthApi = AuthApiFactory();

export const useRegister = () => {
  return useMutation({
    mutationFn: (data: AuthApiAuthRegisterPostRequest) => AuthApi.authRegisterPost(data),
  });
};

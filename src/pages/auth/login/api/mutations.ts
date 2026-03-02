import { AuthApiFactory, type AuthApiAuthLoginPostRequest } from '@/apis';
import { useMutation } from '@tanstack/react-query';

const AuthApi = AuthApiFactory();

export const useLogin = () => {
  return useMutation({
    mutationFn: (data: AuthApiAuthLoginPostRequest) => AuthApi.authLoginPost(data),
  });
};

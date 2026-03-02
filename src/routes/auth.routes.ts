import { type RouteObject } from 'react-router';

export const authRoutes: RouteObject[] = [
  {
    path: '/auth',
    lazy: async () => ({ Component: (await import('../layouts/AuthLayout')).default }),
    HydrateFallback: () => null,
    children: [
      {
        path: 'login',
        lazy: async () => ({ Component: (await import('../pages/auth/login')).default }),
      },
      {
        path: 'register',
        lazy: async () => ({ Component: (await import('../pages/auth/register')).default }),
      },
    ],
  },
];

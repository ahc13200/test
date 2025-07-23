import { security_routes } from '~/modules/security/security.routes'

export const routes = [
  {
    path: '/',
    name: 'home',
    children: [
      ...security_routes,
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('~/pages/Dashboard.vue'),
      },
    ],
  },
]

export const security_routes = [
  {
    path: 'security',
    meta: {
      module: 'security',
    },
    children: [
      {
        path: 'users',
        name: 'users',
        component: () => import('~/modules/security/user/views/UserList.vue'),
      },
      {
        path: 'roles',
        name: 'roles',
        component: () => import('~/modules/security/role/views/RoleList.vue'),
      },
      {
        path: 'permissions',
        name: 'permissions',
        component: () => import('~/modules/security/permission/views/PermissionList.vue'),
      },
    ],
  },
]

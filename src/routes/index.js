import {
   Login,
   Register,
   NoAuth,
   NotFound,
   ServerError,
   Workplace,
   Analysis,
   User,
   Role,
   Permission,
   Banner,
   Test1,
   Test11,
   Test2,
   MenuItem,
   Home
} from '_p';

const constantRoutes = [
   {
      path: '/login',
      component: Login
   },
   {
      path: '/register',
      component: Register
   }
];

const exceptionRoutes = [
   {
      path: '/exception/403',
      component: NoAuth
   },
   {
      path: '/exception/404',
      component: NotFound
   },
   {
      path: '/exception/500',
      component: ServerError
   }
];

const asyncRoutes = [
   {
      path: '/home',
      meta: {
         title: 'Home',
         icon: 'home',
         breadcrumbs: ['Home']
      },
      component: Home
   },
   {
      path: '/dashboard',
      meta: {
         title: 'Dashboard',
         icon: 'dashboard'
      },
      children: [
         {
            path: '/dashboard/workplace',
            component: Workplace,
            meta: {
               title: 'Workplace',
               breadcrumbs: ['Dashboard', 'Workplace']
            }
         },
         {
            path: '/dashboard/analysis',
            component: Analysis,
            meta: {
               title: 'Analysis',
               breadcrumbs: ['Dashboard', 'Analysis']
            }
         }
      ]
   },
   {
      path: '/system',
      meta: {
         title: 'System',
         icon: 'setting'
      },
      children: [
         {
            path: '/system/user',
            component: User,
            meta: {
               title: 'User',
               breadcrumbs: ['System', 'User']
            }
         },
         {
            path: '/system/role',
            component: Role,
            meta: {
               title: 'Role',
               breadcrumbs: ['System', 'Role']
            }
         },
         {
            path: '/system/permission',
            component: Permission,
            meta: {
               title: 'Permission',
               breadcrumbs: ['System', 'Permission']
            }
         }
      ]
   },
   {
      path: '/multiple',
      meta: {
         title: 'Multiple',
         icon: 'dashboard'
      },
      children: [
         {
            path: '/multiple/menu-item',
            component: MenuItem,
            meta: {
               title: 'MenuItem',
               breadcrumbs: ['Multiple', 'MenuItem']
            }
         },
         {
            path: '/multiple/submenu',
            meta: {
               title: 'Submenu',
               icon: 'setting'
            },
            children: [
               {
                  path: '/multiple/submenu/test1',
                  component: Test1,
                  meta: {
                     title: 'Test1',
                     icon: 'home'
                  },
                  children: [
                     {
                        path: '/multiple/submenu/test1/test-1-1',
                        component: Test11,
                        meta: {
                           title: 'Test-1-1',
                           breadcrumbs: [
                              'Multiple',
                              'Submenu',
                              'Test1',
                              'Test-1-1'
                           ]
                        }
                     }
                  ]
               },
               {
                  path: '/multiple/submenu/test2',
                  component: Test2,
                  meta: {
                     title: 'Test2',
                     breadcrumbs: ['Multiple', 'Submenu', 'Test2']
                  }
               }
            ]
         }
      ]
   },
   {
      path: '/website',
      meta: {
         title: 'Website',
         icon: 'laptop'
      },
      children: [
         {
            path: '/website/banner',
            component: Banner,
            meta: {
               title: 'Banner',
               breadcrumbs: ['Website', 'Banner']
            }
         }
      ]
   }
];

export { constantRoutes, asyncRoutes, exceptionRoutes };

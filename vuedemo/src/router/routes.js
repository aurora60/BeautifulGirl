export const constantRoutes = [{
        path: '/',
        name: 'Home',
        component: () =>
            import ('@/views/Home'),
        children: [{
                path: '/home/UserCenter',
                name: '用户中心',
                component: () =>
                    import ('@/views/PersonalCenter/UserCenter'),
            },
            {
                path: '/AccountSecurity',
                name: '账户安全',
                component: () =>
                    import ('@/views/PersonalCenter/AccountSecurity'),

            },
            {
                path: '/IdentityAuthentication',
                name: '身份认证',
                component: () =>
                    import ('@/views/PersonalCenter/IdentityAuthentication'),

            },
            {
                path: '/CollectionSettings',
                name: '收款设置',
                component: () =>
                    import ('@/views/PersonalCenter/CollectionSettings'),

            },
        ]

    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('@/views/Login'),
        hidden: true
    },
    {
        path: '/Register',
        name: 'Register',
        component: () =>
            import ('@/views/Register'),
        hidden: true
    },

]
import { IConfig } from "umi";

const routes: IConfig['routes'] = [
    {
        path: '/signin',
        component: '@/pages/Login'
    },
    {
        path: '/',
        component: '@/layouts/index.tsx',
        routes: [
            {
                path: '/',
                component: '@/pages/Home/index.tsx',
            },
            {
                path: '/recommend',
                component: '@/pages/Home/index.tsx',
            },
            {
                path: '/explore',
                component: '@/pages/Explore/index.tsx',

            },
            {
                path: '/question',
                component: '@/pages/Question/index.tsx',

            },
            {
                path: '/post/:id',
                component: '@/pages/Article/index.tsx',

            },
        ]
    }
]


export default routes;
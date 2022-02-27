import { IConfig } from 'umi';

const routes: IConfig['routes'] = [
  {
    path: '/signin',
    component: '@/pages/Login',
  },
  {
    path: '/askCreator',
    component: '@/pages/AskCreator',
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    // redirect:'/home',
    component: '@/layouts/index.tsx',
    // exact:true,
    routes: [
      {
        path: '/home',
        component: '@/pages/Home/index.tsx',
      },
      // {
      //   path: 'home/recommend',
      //   component: '@/pages/Home/index.tsx',
      // },
      {
        path: '/frontend',
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
    ],
  },
  {
    component: '@/pages/404.tsx',
  },
];

export default routes;

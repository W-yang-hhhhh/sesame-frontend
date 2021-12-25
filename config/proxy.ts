import { IConfig } from 'umi';

const proxy: IConfig['proxy'] = {
  '/api': {
    target: 'http://layfolk.ltd:4000',
    changeOrigin: true,
    pathRewrite: { '/api': '' },
  },
};

export default proxy;

// https://umijs.org/config/
import { defineConfig } from 'umi';
import zhCN from 'antd/lib/locale/zh_CN';
// import proxy from './proxy';
import routes from './routes';

export default defineConfig({
    hash: true,
    forkTSChecker: {
      typescript: true,
      async: true,
    },
    fastRefresh: {},
    nodeModulesTransform: {
      type: 'none',
      exclude: [],
    },
    // esbuild: {},
    // mfsu: {},
    antd: {
      config: {
        locale: zhCN,
      },
    },
    locale: {
      default: 'zh-CN',
    },
    // dynamicImport: {
    //   loading: '@ant-design/pro-layout/es/PageLoading',
    // },
    targets: {
      ie: 11,
    },
    devServer: {
      port: 8888,
    },
    // layout: {
    //   title: 'sesame',
    // },
    ignoreMomentLocale: true,
    routes,
  });

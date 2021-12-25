// 全局请求配置
import type { RequestConfig } from 'umi';
import type { RequestInterceptor, ResponseInterceptor } from 'umi-request';
import { message, notification } from 'antd';
import Oauth from '@/scripts/ouath';

const codeMap = {
  403: '暂无权限',
  404: '资源不存在',
  500: '服务器异常',
  502: '网关错误',
  503: '服务不可用，服务器暂时过载或维护',
  504: '网关超时',
};

const authHeaderInterceptor: RequestInterceptor = (url, options) => {
  console.log(123);
  const token = Oauth.getStoreToken() as string;
  // 过滤 sso 获取 token 的接口请求，否则会 cors
  const authHeader = { Authorization: token };
  const customHeaders = JSON.stringify(options.headers) === '{}' ? authHeader : options.headers;
  return {
    url,
    options: { ...options, interceptors: true, headers: customHeaders },
  };
};

// const zapiMockOptionsInterceptor: RequestInterceptor = (url, { mock, ...options }) => {
//   return {
//     url: mock && !IS_PROD ? `/mock/zapiId${url}` : url,
//     options: { ...options, interceptors: true },
//   };
// };
const noPermissionSubmitInterceptor: ResponseInterceptor = (response, options) => {
  // 处理提交出现401跳转导致数据丢失问题
  console.log(response.status, options.method);
  if (options.method !== 'GET' && response.status === 401) {
    // message.warn('用户名密码不正确，请重新输入', 1000);
    throw Error('用户名密码不正确，请重新输入');
  }
  return response;
};
export const request: RequestConfig = {
  //   errorConfig: {
  //     adaptor: (resData) => {
  //       const { msg, code, data, ...otherRes } = resData;
  //       if (code !== 0) {
  //         otherRes.errorCode = code;
  //         otherRes.errorMessage = msg;
  //       }
  //       return {
  //         ...otherRes,
  //         success: code === 0,
  //         data,
  //       };
  //     },
  //   },
  //   errorHandler: (error: any) => {
  //     if (error?.name === 'BizError') {
  //       notification.error({
  //         message: `返回错误 ${error.data?.code}`,
  //         description: error.data?.msg,
  //       });
  //       return Promise.reject(error.data);
  //     }
  //     if (error?.response) {
  //       const { status } = error.response;
  //       const { method } = error.request?.options || {};
  //       if (status === 401) {
  //         // method === 'GET' && oauth.login();
  //         return null;
  //       }
  //       notification.error({
  //         message: `请求错误 ${status}`,
  //         description: error.data?.msg || '请求异常',
  //       });
  //     } else {
  //       // 请求初始化时出错或者没有响应返回的异常
  //       notification.error({
  //         message: '请求没有响应',
  //       });
  //     }
  //     throw error('');
  //   },
  requestInterceptors: [authHeaderInterceptor],
  responseInterceptors: [noPermissionSubmitInterceptor],
};

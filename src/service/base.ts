import { request } from 'umi';

const BASE_PREFIX = '/api';

export const userLogin = async (data: { username: string; password: string }) =>
  request(`${BASE_PREFIX}/user/login`, {
    method: 'POST',
    data,
  });

/**
 * 获取当前用户
 */
export const currentUserInfo = async (id: string) =>
  request(`${BASE_PREFIX}/user/${id}`, {
    method: 'GET',
  });

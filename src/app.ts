import { request } from '@/init/request';
import { currentUserInfo } from '@/service/base';

async function getInitialState() {
  if (localStorage.getItem('token')) {
    const userinfo = await currentUserInfo('61a2310da9f0c207dd37660d');
    console.log(userinfo);
    return {
      userinfo,
    };
  } else {
    return {};
  }
}

export { request, getInitialState };

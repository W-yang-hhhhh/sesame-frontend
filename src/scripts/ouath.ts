class Oauth {
  // static login() {
  //   Oauth.removeStoreToken();
  //   window.location.href = queryString.stringifyUrl({
  //     url: `${OAUTH_URL}/authorize`,
  //     query: {
  //       client_id: CLIENT_ID,
  //       response_type: RESPONSE_CODE,
  //       redirect_uri: REDIRECT_URI,
  //       scope: SCOPE,
  //       state: STATE,
  //     },
  //   });
  // }
  static logout() {
    Oauth.removeStoreToken();
    window.location.href = '/';
  }
  // static async getAccessToken(code: string) {
  //   const { data } = await fetchOauthToken({
  //     code,
  //     grantType: 'authorization_code',
  //   });
  //   Oauth.setStoreToken(data.oneAuthorization);
  // }
  static getStoreToken() {
    return window.localStorage.getItem('token');
  }
  static setStoreToken(token: string) {
    if (!token) return;
    window.localStorage.setItem('token', token);
  }
  static removeStoreToken() {
    window.localStorage.removeItem('token');
  }
  static isLoginPage() {
    return window.location.pathname === '/login';
  }
}
export default Oauth;

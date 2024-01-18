export const SETLOGINUSER = Symbol('set-login-user');

export const setLoginUser = (payload) => ({
  type: SETLOGINUSER,
  payload
})

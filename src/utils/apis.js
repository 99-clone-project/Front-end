import instance from "../lib/axios"

export const apis = {
  // 회원가입 요청
  signUp: (user) => instance.post('/user/signup', user),

  login: (params) => instance.post('/user/login', params),
  
};

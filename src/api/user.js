import $http from '@/utils/request';

export const checkLoginRes = data =>
   $http.request({
      method: 'post',
      url: '/api/user/login',
      data
   });
export const getUserByTokenRes = token =>
   $http.request({
      method: 'post',
      url: '/api/authorization/user',
      data: {
         token
      }
   });

export const getUsersRes = _ =>
   $http.request({
      method: 'get',
      url: '/api/users'
   });

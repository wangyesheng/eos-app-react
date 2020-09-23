import { checkLoginRes, getUserByTokenRes } from '@/api/user';
import { setToken, removeToken } from '@/utils/token';
import { SET_APP_USER } from '../action-types';

export function SetAppUser(data) {
   return {
      type: SET_APP_USER,
      data
   };
}

export function CheckLogin(user) {
   return async dispatch => {
      const { token } = await checkLoginRes(user);
      if (token) {
         setToken(token);
         const { appUser } = await getUserByTokenRes(token);
         dispatch(
            SetAppUser({
               appUser,
               isLogin: true
            })
         );
      }
   };
}

export function GetAppUser(token) {
   return dispatch => {
      return new Promise(async (resolve, reject) => {
         try {
            const { appUser } = await getUserByTokenRes(token);
            dispatch(
               SetAppUser({
                  appUser,
                  isLogin: true
               })
            );
            resolve(true);
         } catch (error) {
            reject(error);
         }
      });
   };
}

export function Logout() {
   return dispatch => {
      dispatch(
         SetAppUser({
            appUser: {},
            isLogin: false
         })
      );
      removeToken();
   };
}

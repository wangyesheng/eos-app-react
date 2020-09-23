import { SET_APP_USER } from '../action-types';

let initState = {
   isLogin: false,
   appUser: {}
};

function userReducer(state = initState, { type, data }) {
   switch (type) {
      case SET_APP_USER:
         return {
            isLogin: data.isLogin,
            appUser: data.appUser
         };
      default:
         return state;
   }
}

export default userReducer;

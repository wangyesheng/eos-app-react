import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { getToken } from '@/utils/token';
import { GetAppUser } from '_s/user/action';

import BasicLayout from '@/layouts/BasicLayout';

@connect(
   (state) => ({ isLogin: state.user.isLogin, appUser: state.user.appUser }),
   { GetAppUser }
)
class PrivateRoute extends React.Component {
   render() {
      const { isLogin, appUser, GetAppUser } = this.props;
      return (
         <Route
            path="/"
            render={(props) => {
               if (isLogin && Object.keys(appUser).length > 0) {
                  return <BasicLayout appUser={appUser} {...props} />;
               } else {
                  const token = getToken();
                  if (token) {
                     GetAppUser(token)
                        .then((_) => {
                           if (!_) {
                              return props.history.push('/login', {
                                 redirect: props.location.pathname,
                              });
                           }
                        })
                        .catch((_) => {
                           return props.history.push('/login', {
                              redirect: props.location.pathname,
                           });
                        });
                  } else {
                     return props.history.push('/login', {
                        redirect: props.location.pathname,
                     });
                  }
               }
            }}
         />
      );
   }
}

export default PrivateRoute;

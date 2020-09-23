import React, { Component } from 'react';
import { Switch, Redirect, withRouter } from 'react-router-dom';
import { Layout } from 'antd';

import EOSBreadcrumb from '../Breadcrumb';

const { Content } = Layout;

@withRouter
class AppMain extends Component {
   render() {
      const {
         location: { pathname },
         routes,
         breadcrumbs,
         redirects,
      } = this.props;
      const currentBreadcrumbs = (
         breadcrumbs.find((x) => x.path === pathname) || {}
      ).value;
      return (
         <div className="app-main-container">
            <Content className="app-main-wrap">
               {currentBreadcrumbs ? (
                  <EOSBreadcrumb
                     pathname={pathname}
                     breadcrumbs={currentBreadcrumbs}
                  />
               ) : null}
               <div>
                  <Switch>
                     {routes.map((route) => route)}
                     {redirects.map((x) => (
                        <Redirect
                           key={x.to}
                           to={x.to}
                           from={x.from}
                           exact
                        ></Redirect>
                     ))}
                     <Redirect
                        to={redirects[0] ? redirects[0].to : '/exception/403'}
                        from="/"
                        exact
                     ></Redirect>
                     <Redirect to="/exception/404"></Redirect>
                  </Switch>
               </div>
            </Content>
         </div>
      );
   }
}

export default AppMain;

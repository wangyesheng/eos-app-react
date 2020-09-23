import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { constantRoutes } from '@/routes';
import PrivateRoute from './auth/PrivateRoute';

class App extends React.Component {
   render() {
      return (
         <Router>
            <Switch>
               {constantRoutes.map((route) => (
                  <Route
                     key={route.path}
                     path={route.path}
                     component={route.component}
                  />
               ))}
               <PrivateRoute />
            </Switch>
         </Router>
      );
   }
}
export default App;

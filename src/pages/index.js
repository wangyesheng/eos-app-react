import Login from './user/Login';
import Register from './user/Register';

import NoAuth from './exception/NoAuth';
import NotFound from './exception/NotFound';
import ServerError from './exception/ServerError';

import Workplace from './dashboard/workplace/Workplace';
import Analysis from './dashboard/analysis/Analysis';
import User from './system/user/User';
import Role from './system/role/Role';
import Permission from './system/permission/Permission';
import Banner from './website/banner/Banner';
import Test11 from './multiple-submenu/Test-1-1';
import Test1 from './multiple-submenu/Test1';
import Test2 from './multiple-submenu/Test2';
import MenuItem from './multiple-submenu/MenuItem';
import Home from './home/Home';

export {
   Login,
   Register,
   Workplace,
   Analysis,
   User,
   Role,
   Permission,
   NoAuth,
   NotFound,
   ServerError,
   Banner,
   Test1,
   Test11,
   Test2,
   MenuItem,
   Home
};

// import loadable from 'react-loadable';
// import { Loading } from '_c';

// const Login = loadable({
//    loader: () => import('./login'),
//    loading: Loading
// });
// const Workplace = loadable({
//    loader: () => import('./dashboard/workplace'),
//    loading: Loading
// });
// const Analysis = loadable({
//    loader: () => import('./dashboard/analysis'),
//    loading: Loading
// });
// const User = loadable({
//    loader: () => import('./system/user'),
//    loading: Loading
// });
// const Role = loadable({
//    loader: () => import('./system/role'),
//    loading: Loading
// });
// const Permission = loadable({
//    loader: () => import('./system/permission'),
//    loading: Loading
// });

// const NoAuth = loadable({
//    loader: () => import('./exception/NoAuth'),
//    loading: Loading
// });
// const NotFound = loadable({
//    loader: () => import('./exception/NotFound'),
//    loading: Loading
// });
// const ServerError = loadable({
//    loader: () => import('./exception/ServerError'),
//    loading: Loading
// });

// const InfoPublish = loadable({
//    loader: () => import('./message/info-publish'),
//    loading: Loading
// });

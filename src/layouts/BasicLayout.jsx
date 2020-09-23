import React, { Component } from 'react';
import { NavLink as Link, Route } from 'react-router-dom';
import { Layout, Menu, Icon, BackTop } from 'antd';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import Sidebar from './Sidebar';
import AppMain from './AppMain';
import { asyncRoutes, exceptionRoutes } from '@/routes';

const { Header } = Layout;
const { SubMenu } = Menu;

class BasicLayout extends Component {
   constructor(props) {
      super(props);
      this.prevPath = '';
      this.defaultOpenKeys = [];
      this.rootSubMenuKeys = [];
      this.routes = [];
      this.breadcrumbs = [];
      this.redirects = [];
      const {
         location: { pathname },
         appUser: {
            permissions: { pages },
         },
      } = this.props;

      this.menuNodes = this.match(
         pathname,
         pages,
         asyncRoutes,
         this.rootSubMenuKeys,
         this.routes,
         this.breadcrumbs,
         this.redirects
      );

      // 多层级 submenu
      for (let i = 0, length = this.redirects.length; i < length; i++) {
         // debugger
         const layer = this.redirects[i];
         if (!layer.to) {
            const nextLayer = this.redirects[i + 1];
            layer.to = nextLayer.from;
            if (
               layer.from ===
               this.defaultOpenKeys[this.defaultOpenKeys.length - 1]
            ) {
               this.defaultOpenKeys.push(layer.to);
            }
         }
      }

      exceptionRoutes.map((route) =>
         this.routes.push(
            <Route
               key={route.path}
               path={route.path}
               component={route.component}
            />
         )
      );
   }

   /**
    * pathname // 当前请求路径
    * pages // 用户页面权限集合
    * asyncRoutes // 全局路由表
    * rootSubMenuKeys // subMenu 集合
    * routes // 按照当前用户权限递归生成一维路由数组
    * breadcrumbs // 每个路由对应的面包屑集合
    * redirects // 根据权限动态计算的重定向地址 - /system -> /system/user
    * layer // 每一层重定向对象
    * [ return ] // 返回值为生成的菜单集合
    */

   match = (
      pathname,
      pages,
      asyncRoutes,
      rootSubMenuKeys,
      routes,
      breadcrumbs,
      redirects,
      layer
   ) => {
      return asyncRoutes.map((route) => {
         if (!pages.includes(route.path)) {
            // 1. map 直接 return 不行 因为 map 方法期待你有返回的元素
            // 2.* 并未跳出循环，只不过 return 了一个 null 作为 REACT 元素，导致其未渲染
            return null;
         }

         if (route.children) {
            rootSubMenuKeys.push(route.path);

            const layer = { from: route.path };
            redirects.push(layer);

            if (pathname.startsWith(route.path)) {
               this.getDefaultOpenKeys(route.path, route.children, pathname);
            }

            return (
               <SubMenu
                  key={route.path}
                  title={
                     <span>
                        {route.meta.icon ? (
                           <Icon type={route.meta.icon} />
                        ) : null}
                        {route.meta.title}
                     </span>
                  }
               >
                  {this.match(
                     pathname,
                     pages,
                     route.children,
                     rootSubMenuKeys,
                     routes,
                     breadcrumbs,
                     redirects,
                     layer
                  )}
               </SubMenu>
            );
         } else {
            if (layer && !layer.to) layer.to = route.path;
            routes.push(
               <Route
                  key={route.path}
                  path={route.path}
                  component={route.component}
                  exact={route.exact}
               />
            );
            breadcrumbs.push({
               path: route.path,
               value: route.meta.breadcrumbs,
            });
            if (redirects.length === 0) {
               // 路由表中第一个路由无子集
               redirects.push({ from: '/', to: route.path });
            }
            return (
               <Menu.Item key={route.path}>
                  <Link to={route.path}>
                     {route.meta.icon ? <Icon type={route.meta.icon} /> : null}
                     {route.meta.title}
                  </Link>
               </Menu.Item>
            );
         }
      });
   };

   getDefaultOpenKeys = (rootPath, routeChildren, pathname) => {
      // debugger;
      if (pathname.startsWith(rootPath)) {
         this.defaultOpenKeys.push(rootPath);
      }
      if (routeChildren) {
         routeChildren.forEach((route) => {
            this.getDefaultOpenKeys(route.path, route.children, pathname);
         });
      }
   };

   render() {
      const { location } = this.props;
      const currentPath = location.pathname + location.search;
      if (currentPath !== this.prevPath) {
         NProgress.start();
         this.prevPath = currentPath;
         NProgress.done();
      }
      return (
         <Layout style={{ minHeight: '100%' }}>
            <Sidebar
               menuNodes={this.menuNodes}
               rootSubMenuKeys={this.rootSubMenuKeys}
               defaultOpenKeys={this.defaultOpenKeys}
            />
            <Layout className="app-content-container">
               <Header className="app-header-container" />
               <BackTop />
               <AppMain
                  routes={this.routes}
                  breadcrumbs={this.breadcrumbs}
                  redirects={this.redirects}
               />
               {/* <Footer className="app-footer-container">
                  Eos App ©2020 Created by wangyesheng
               </Footer> */}
            </Layout>
         </Layout>
      );
   }
}

export default BasicLayout;

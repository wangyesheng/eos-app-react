import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import logo from '@/assets/images/logo/logo.png';

const { Sider } = Layout;

@withRouter
class Sidebar extends Component {
   constructor(props) {
      super(props);
      this.state = {
         openKeys: []
      };
      const { defaultOpenKeys, rootSubMenuKeys, menuNodes } = this.props;
      this.defaultOpenKeys = [...new Set(defaultOpenKeys)];
      this.rootSubMenuKeys = rootSubMenuKeys;
      this.menuNodes = menuNodes;
   }

   componentDidMount() {
      this.setState({
         openKeys: this.defaultOpenKeys
      });
   }

   onOpenChange = openKeys => {
      // const latestOpenKey = openKeys.find(
      //    key => this.state.openKeys.indexOf(key) === -1
      // );
      // if (this.rootSubMenuKeys.indexOf(latestOpenKey) === -1) {
      //    this.setState({ openKeys });
      // } else {
      //    this.setState({
      //       openKeys: latestOpenKey ? [latestOpenKey] : []
      //    });
      // }
      this.setState({
         openKeys
      });
   };

   render() {
      const {
         location: { pathname }
      } = this.props;

      // console.log('sider', this.defaultOpenKeys);
      return (
         <Sider className="app-sider-container" width={220}>
            <div className="app-sider-logo-wrap">
               <div>
                  <img src={logo} alt="" />
               </div>
            </div>
            <Menu
               mode="inline"
               selectedKeys={[pathname]}
               openKeys={this.state.openKeys}
               onOpenChange={this.onOpenChange}
               style={{ padding: '12px 0' }}
            >
               {this.menuNodes}
            </Menu>
         </Sider>
      );
   }
}

export default Sidebar;

import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { Logout } from '@/store/user/action';

import './index.less';

@connect(() => ({}), { Logout })
class WorkPlace extends Component {
   hanldeLogout = () => {
      this.props.Logout();
      this.props.history.push('/login');
   };
   render() {
      return (
         <div className="app-main-background">
            <Button onClick={this.hanldeLogout}>Toggle</Button>
         </div>
      );
   }
}

export default WorkPlace;

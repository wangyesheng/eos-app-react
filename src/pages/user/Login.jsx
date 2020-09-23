import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Input, Button, Form, Checkbox, Icon } from 'antd';
import UserLayout from '@/layouts/UserLayout';
import { connect } from 'react-redux';
import { CheckLogin } from '_s/user/action';

@connect(
   (reducer) => ({
      isLogin: reducer.user.isLogin,
      appUser: reducer.user.appUser,
   }),
   {
      CheckLogin,
   }
)
@Form.create({ name: 'login' })
class Login extends Component {
   handleSubmit = (e) => {
      e.preventDefault();
      const {
         CheckLogin,
         form: { validateFields },
      } = this.props;
      validateFields((err, userInfo) => {
         if (!err) {
            CheckLogin({
               username: userInfo.username,
               password: userInfo.password,
            });
         }
      });
   };

   render() {
      const {
         location,
         isLogin,
         appUser,
         form: { getFieldDecorator },
      } = this.props;
      const redirect = location.state ? location.state.redirect : '/';
      if (isLogin && Object.keys(appUser).length > 0) {
         return <Redirect to={redirect} />;
      }
      return (
         <UserLayout>
            <Form onSubmit={this.handleSubmit}>
               <Form.Item>
                  {getFieldDecorator('username', {
                     // 声明式验证
                     rules: [
                        {
                           required: true,
                           message: 'Please input your username!',
                        },
                        {
                           pattern: /^[a-zA-z0-9_]+$/,
                           message:
                              'Username must be English, numeric, _ combination!',
                        },
                     ],
                     initialValue: 'admin',
                  })(
                     <Input
                        prefix={
                           <Icon
                              type="user"
                              style={{ color: 'rgba(0,0,0,.25)' }}
                           />
                        }
                        placeholder="Username"
                     />
                  )}
               </Form.Item>
               <Form.Item>
                  {getFieldDecorator('password', {
                     rules: [
                        // 自定义验证
                        {
                           validator: this.passwordValidator,
                        },
                     ],
                     initialValue: 'admin',
                  })(
                     <Input
                        prefix={
                           <Icon
                              type="lock"
                              style={{ color: 'rgba(0,0,0,.25)' }}
                           />
                        }
                        type="password"
                        placeholder="Password"
                     />
                  )}
               </Form.Item>
               <Form.Item>
                  {getFieldDecorator('remember', {
                     valuePropName: 'checked',
                     initialValue: true,
                  })(<Checkbox>Remember me</Checkbox>)}
                  <Button type="primary" htmlType="submit" block>
                     Sing in
                  </Button>
                  Or <Link to="/register">{'Register now!'}</Link>
               </Form.Item>
            </Form>
         </UserLayout>
      );
   }
}

export default Login;

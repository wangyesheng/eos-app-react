import React, { Component } from 'react';
import { Card, Table, Button, Modal } from 'antd';
import { getUsersRes } from '@/api/user';

class User extends Component {
   userTableColumns = [
      {
         title: 'Username',
         dataIndex: 'Username'
      },
      {
         title: 'Email',
         dataIndex: 'Email'
      },
      {
         title: 'Address',
         dataIndex: 'Address'
      },
      {
         title: 'Operation',
         dataIndex: 'Operation',
         render: (text, record) =>
            record.Username === 'Ann' ? null : (
               <Button
                  type="link"
                  onClick={() => this.handleShowUserModal(record)}
               >
                  Edit
               </Button>
            )
      }
   ];

   state = {
      users: [],
      loading: true,
      userModal: {
         visible: false,
         title: ''
      }
   };

   getUsers = async () => {
      try {
         const { users } = await getUsersRes();
         this.setState({
            users,
            loading: false
         });
      } catch (error) {
         this.setState({
            users: [],
            loading: false
         });
      }
   };

   handleShowUserModal = record => {
      if (record === null) {
         this.setState({
            userModal: {
               visible: true,
               title: 'Create'
            }
         });
      } else {
         this.setState({
            userModal: {
               visible: true,
               title: 'Edit'
            }
         });
      }
   };
   handleSave = () => {
      this.setState({
         userModal: {
            visible: false
         }
      });
   };
   handleCancel = () => {
      this.setState({
         userModal: {
            visible: false
         }
      });
   };
   componentDidMount() {
      this.getUsers();
   }

   render() {
      const {
         users,
         loading,
         userModal: { visible, title }
      } = this.state;
      return (
         <div>
            <Card
               title={
                  <Button onClick={() => this.handleShowUserModal(null)}>
                     Create
                  </Button>
               }
            >
               <Table
                  size="middle"
                  rowKey="Id"
                  loading={loading}
                  dataSource={users}
                  columns={this.userTableColumns}
               />
            </Card>
            <Modal
               okText="Save"
               maskStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}
               maskClosable={false}
               title={title}
               visible={visible}
               onOk={this.handleSave}
               onCancel={this.handleCancel}
            >
               <p>Some contents...</p>
               <p>Some contents...</p>
               <p>Some contents...</p>
            </Modal>
         </div>
      );
   }
}

export default User;

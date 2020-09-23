import React from 'react';
import { withRouter } from 'react-router-dom';
import { Result, Button } from 'antd';

function BasicException({ status, title, subTitle, isNoAuth, history }) {
   return (
      <Result
         status={status}
         title={title}
         subTitle={subTitle}
         extra={
            isNoAuth ? null : (
               <Button
                  type="primary"
                  shape="round"
                  onClick={() => {
                     history.push('/');
                  }}
               >
                  Back Home
               </Button>
            )
         }
      />
   );
}

export default withRouter(BasicException);

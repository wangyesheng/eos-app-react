import React from 'react';

import BasicException from './BasicException';

export default function NotAuth() {
   return (
      <BasicException
         status="403"
         title="403"
         subTitle="Sorry, you are not authorized to access this page."
         isNoAuth
      ></BasicException>
   );
}

import React from 'react';

import BasicException from './BasicException';

export default function NotFound() {
   return (
      <BasicException
         status="404"
         title="404"
         subTitle="Sorry, the page you visited does not exist."
      ></BasicException>
   );
}

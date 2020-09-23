import React from 'react';

import BasicException from './BasicException';

export default function ServerError() {
   return (
      <BasicException
         status="500"
         title="500"
         subTitle="Sorry, the server is wrong."
      ></BasicException>
   );
}

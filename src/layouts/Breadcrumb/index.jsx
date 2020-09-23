import React from 'react';
import { Breadcrumb } from 'antd';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';

const EOSBreadcrumb = ({ pathname, breadcrumbs }) => {
   return (
      // <TransitionGroup className="app-breadcrumb-wrap">
      //    <CSSTransition key={pathname} timeout={500} classNames={'fade'}>

      //    </CSSTransition>
      // </TransitionGroup>
      <div className="app-breadcrumb-wrap">
         <Breadcrumb>
            {breadcrumbs.map(item => (
               <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
            ))}
         </Breadcrumb>
      </div>
   );
};

export default EOSBreadcrumb;

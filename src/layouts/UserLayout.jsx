import React, { Component } from 'react';

class UserLayout extends Component {
   render() {
      return (
         <div className="user-layout-container">
            <section className="user-content-wrap">
               <div className="proj-desc">
                  <span className="proj-desc-title">EOS APP</span>
               </div>
               <div>{this.props.children}</div>
            </section>
         </div>
      );
   }
}

export default UserLayout;

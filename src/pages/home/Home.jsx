import React, { PureComponent } from 'react';

class Home extends PureComponent {
   handleChangeType = e => {
      // li 中 data-type 的值
      console.log(e.target.dataset.type);
   };
   render() {
      return (
         <>
            <h1>Home</h1>
            <ul onClick={this.handleChangeType} style={{display:'inline-block'}}>
               <li data-type="1">1</li>
               <li data-type="2">2</li>
               <li data-type="3">3</li>
            </ul>
         </>
      );
   }
}

export default Home;

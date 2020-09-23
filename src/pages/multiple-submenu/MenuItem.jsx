import React, { Component } from 'react';
import { Card } from 'antd';

import d1 from '@/assets/images/dashboard/1.jpg';
import d2 from '@/assets/images/dashboard/2.jpg';
import d3 from '@/assets/images/dashboard/3.jpg';
import d4 from '@/assets/images/dashboard/4.jpg';
import d5 from '@/assets/images/dashboard/5.jpg';
import d6 from '@/assets/images/dashboard/6.jpg';
import d7 from '@/assets/images/dashboard/7.jpg';
import d8 from '@/assets/images/dashboard/8.jpg';

const { Grid } = Card;

const gridStyle = {
   width: '100%',
   textAlign: 'center'
};

export default class MenuItem extends Component {
   dashboards = [
      {
         url: d1
      },
      {
         url: d2
      },
      {
         url: d3
      },
      {
         url: d4
      },
      {
         url: d5
      },
      {
         url: d6
      },
      {
         url: d7
      },
      {
         url: d8
      }
   ];
   render() {
      return (
         <>
            <Card title="Dashboard">
               {this.dashboards.map((x, i) => (
                  <Grid style={gridStyle} key={i}>
                     <img src={x.url} alt="" />
                  </Grid>
               ))}
            </Card>
         </>
      );
   }
}

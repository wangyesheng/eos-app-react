import React, { Component } from 'react';
import { Card } from 'antd';

import brazil from '@/assets/images/banner/brazil.jpg';
import deer from '@/assets/images/banner/deer.jpg';
import fish from '@/assets/images/banner/fish.jpg';
import panda from '@/assets/images/banner/panda.jpg';
import penguin from '@/assets/images/banner/penguin.jpg';
import robin from '@/assets/images/banner/robin.jpg';
import roomies from '@/assets/images/banner/roomies.jpg';
import walrus from '@/assets/images/banner/walrus.jpg';
import whale from '@/assets/images/banner/whale.jpg';

const { Grid } = Card;

const gridStyle = {
   width: '33.3%',
   textAlign: 'center'
};

const imgStyle = {
   height: '190px'
};

export default class Banner extends Component {
   banners = [
      {
         url: brazil
      },
      {
         url: deer
      },
      {
         url: fish
      },
      {
         url: panda
      },
      {
         url: penguin
      },
      {
         url: robin
      },
      {
         url: roomies
      },
      {
         url: walrus
      },
      {
         url: whale
      }
   ];
   render() {
      return (
         <>
            <Card title="Vitality">
               {this.banners.map((x, i) => (
                  <Grid style={gridStyle} key={i}>
                     <img src={x.url} alt="" style={imgStyle}/>
                  </Grid>
               ))}
            </Card>
         </>
      );
   }
}

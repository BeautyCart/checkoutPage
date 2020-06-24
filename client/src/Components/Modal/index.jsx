import React from 'react';
import ItemInfo from './ItemInfo';
import Checkout from './Checkout';
import Carousel from './Carousel';

function Modal() {
  return (
    <div>
      <ItemInfo />
      <Checkout />
      <Carousel />
    </div>
  );
}

export default Modal;

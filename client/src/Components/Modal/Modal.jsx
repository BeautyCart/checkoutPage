import React from 'react';
import ItemInfo from './ItemInfo.jsx';
import Checkout from './Checkout.jsx';
import Carousel from './Carousel.jsx';

function Modal() {
  return (
    <div>
      <ItemInfo />
      <Checkout />
      <Carousel />
    </div>
  )
}

export default Modal
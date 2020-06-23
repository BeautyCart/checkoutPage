import React from 'react';
import ReactDOM from 'react-dom';

function ItemInfo(props) {
  // console.log('props',props)
  if(props.optionChosenIndex !== undefined) {
    // console.log('should not be empty {}')
    console.log('should be the item', props.item.brand)
    return (
            <div>
              <span>
                <div>{props.item.brand}</div>
                <div>{props.item.itemName}</div>
                <span>{props.item.reviews}</span>
                <span>{props.item.hearts}</span>
              </span>
              <span>
                <div>{props.item.options[props.optionChosenIndex].price}</div>
                <div>SPEND $50 FOR FREE SHIPPING</div>
              </span>
            </div>
            )
  } else {
    // console.log('inside else')
    return( 
          <div>
            <span>
              <div>Loading...</div>
              <div>Loading...</div>
              <span>Loading...</span>
              <span>Loading...</span>
            </span>
            <span>
              <div>Loading...</div>
              <div>SPEND $50 FOR FREE SHIPPING</div>
            </span>
          </div>
          )
  }
}

export default ItemInfo;
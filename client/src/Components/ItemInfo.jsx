import React from 'react';

function ItemInfo(props) {
  // console.log('props',props)
  const {
    item: {
      brand, itemName, reviews, hearts, options,
    }, optionChosenIndex,
  } = props;

  if (props.optionChosenIndex !== undefined) {
    // console.log('should not be empty {}')
    console.log('should be the item', props.item.brand);
    return (
      <div>
        <span>
          <div>{brand}</div>
          <div>{itemName}</div>
          <span>{reviews}</span>
          <span>{hearts}</span>
        </span>
        <span>
          <div>{options[optionChosenIndex].price}</div>
          <div>SPEND $50 FOR FREE SHIPPING</div>
        </span>
      </div>
    );
  }
  return (
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
  );
}

export default ItemInfo;

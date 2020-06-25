import React from 'react';
import styled from 'styled-components';

const ProductInfoDiv = styled.div`
  width: 254px;
  height: 173px;
  padding-left: 6px;
  padding-right: 6px;
`;

const ProductPriceDiv = styled.div`
  width: 112px;
  height: 173px;
  padding-left: 6px;
  padding-right: 6px;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
`;

function ItemInfo(props) {
  // console.log('props',props)
  const {
    item: {
      brand, itemName, reviews, hearts, options,
    }, optionChosenIndex,
  } = props;

  if (optionChosenIndex !== undefined) {
    return (
      <Container>
        <ProductInfoDiv>
          <div>{brand}</div>
          <div>{itemName}</div>
          <span>{reviews}</span>
          <span>{hearts}</span>
        </ProductInfoDiv>
        <ProductPriceDiv>
          <div>{options[optionChosenIndex].price}</div>
          <div>SPEND $50 FOR FREE SHIPPING</div>
        </ProductPriceDiv>
      </Container>
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

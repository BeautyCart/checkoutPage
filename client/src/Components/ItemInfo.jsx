import React from 'react';
import styled from 'styled-components';

const ProductInfoDiv = styled.div`
  width: 254px;
  height: 173px;
  padding-left: 6px;
  padding-right: 6px;
`;

const ProductPriceDiv = styled.div`
  font-weight: 700;
  line-height: 1.25;
  font-size: 12px;
  width: 112px;
  height: 173px;
  padding-left: 6px;
  padding-right: 6px;
`;

const PriceDiv = styled.div`
  font-size: 16px;
  margin-bottom: 8px;
`;

const Container = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: flex-start;
`;

const BrandDiv = styled.div`
  font-weight: 700;
  cursor: pointer;
  font-size: 16px;
  text-transform: uppercase;
`;

const ItemNameDiv = styled.div`
  font-size: 16px;
`;

const ReviewsAndHeartsDiv = styled.div`
  font-size: 12px;
  font-weight: 700;
`;

function ItemInfo(props) {
  const {
    item: {
      brand, itemName, reviews, hearts, options,
    }, optionChosenIndex,
  } = props;

  if (optionChosenIndex !== undefined) {
    return (
      <Container>
        <ProductInfoDiv>
          <BrandDiv>{brand}</BrandDiv>
          <ItemNameDiv>{itemName}</ItemNameDiv>
          <ReviewsAndHeartsDiv>
            {reviews}
            {' '}
            5k reviews |
            {' '}
            {hearts}
          </ReviewsAndHeartsDiv>
        </ProductInfoDiv>
        <ProductPriceDiv>
          <PriceDiv>
            {options[optionChosenIndex].price}
          </PriceDiv>
          <div>SPEND $50 FOR FREE SHIPPING</div>
        </ProductPriceDiv>
      </Container>
    );
  }
  return (
    <Container>
      <ProductInfoDiv>
        <BrandDiv>Loading...</BrandDiv>
        <ItemNameDiv>Loading...</ItemNameDiv>
        <ReviewsAndHeartsDiv>
          Loading...
          {' '}
          5k reviews |
          {' '}
          Loading...
        </ReviewsAndHeartsDiv>
      </ProductInfoDiv>
      <ProductPriceDiv>
        <PriceDiv>
          $Loading...
        </PriceDiv>
        <div>SPEND $50 FOR FREE SHIPPING</div>
      </ProductPriceDiv>
    </Container>
  );
}

export default ItemInfo;

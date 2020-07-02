import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 297px;
  height: 120px;
  padding-right: 16px;
  display: flex;
  justify-content: flex-start;
  font-family: Arial, Helvetica, sans-serif;
`;

const Image = styled.img`
  width: 97px;
  height: 97px;
`;

const ProductInfoDiv = styled.div`
  width: 257px;
  height: 120px;
  padding-left: 16px;
  padding-right: 16px;
`;

const BrandDiv = styled.div`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
`;

const ItemNameDiv = styled.div`
  font-size: 14px;
`;

const OptionAndQuantityDiv = styled.div`
  font-size: 12px;
  color: gray;
  margin-top: 4px;
`;

const SizeDiv = styled.div`
  font-size: 12px;
  margin-top: 4px;
`;

const PriceDiv = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-top: 8px;
  margin-bottom: 0px;
`;

function ItemInfo(props) {
  const {
    item: {
      image, brand, itemName, options,
    }, optionChosenIndex, quantity,
  } = props;
  return (
    <Container>
      <Image src={image} />
      <ProductInfoDiv>
        <BrandDiv>{brand}</BrandDiv>
        <ItemNameDiv>{itemName}</ItemNameDiv>
        <OptionAndQuantityDiv>
          ITEM
          {' '}
          {options[optionChosenIndex].label}
          {' '}
          • QTY
          {' '}
          {quantity}
        </OptionAndQuantityDiv>
        <SizeDiv>
          SIZE:
          {' '}
          {options[optionChosenIndex].amount}
        </SizeDiv>
        <PriceDiv>
          {options[optionChosenIndex].price}
        </PriceDiv>
      </ProductInfoDiv>
    </Container>
  );
}

export default ItemInfo;

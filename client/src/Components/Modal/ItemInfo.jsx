import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 297px;
  height: 120px;
  padding-left: 16px;
  padding-right: 16px;
`;

const Image = styled.img`
  width: 97px;
  height: 97px;
`;

function ItemInfo(props) {
  const {
    item: {
      image, brand, hearts, itemName, options, reviews,
    }, optionChosenIndex,
  } = props;
  return (
    <Container>
      <Image src={image} />
    </Container>
  );
}

export default ItemInfo;

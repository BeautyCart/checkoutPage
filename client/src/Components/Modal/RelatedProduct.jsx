import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-width: 121.5px;
  height: 220px;
  padding-left: 6px;
  padding-right: 6px;
`;

const Image = styled.img`
  width: 97px;
  height: 97px;
  margin-left: 15px;
  margin-bottom: 24px;
`;

const BrandAndItemDiv = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: flex-start;
  ${this}:onHover {
    text-decoration: underline;
  }
`;

const BrandDiv = styled.div`
  text-transform: uppercase;
  font-weight: 700;
`;

function RelatedProduct(props) {
  const { product: { image, brand, itemName } } = props;
  return (
    <Container>
      <Image src={image} />
      <BrandAndItemDiv>
        <BrandDiv>
          {brand}
        </BrandDiv>
        <div>
          {itemName}
        </div>
      </BrandAndItemDiv>
    </Container>
  );
}

export default RelatedProduct;

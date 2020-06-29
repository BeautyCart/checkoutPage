import React from 'react';
import styled from 'styled-components';
import StarsRating from '../StarsRating';

const Container = styled.div`
  min-width: 121.5px;
  height: 220px;
  padding-left: 6px;
  padding-right: 6px;
`;

const Image = styled.img`
  width: 97px;
  height: 97px;
  ${this}:hover {
    opacity: 0.5;
  }
  transition: .2s;
`;

const ImageDiv = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
`;

const BrandAndItemDiv = styled.div`
  width: 100%;
  min-height: 30px;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: flex-start;
  ${this}:hover {
    text-decoration: underline;
  }
`;

const BrandDiv = styled.div`
  text-transform: uppercase;
  font-weight: 700;
`;

const PriceDiv = styled.div`
  font-weight: 700;
  margin-top: 4px;
  display: float;
  justify-content: center;
`;

const ReviewsDiv = styled.div`
  width: 100%;
  height: 12px;
  margin-top: 8px;
  display: flex;
  justify-content: center;
`;

function RelatedProduct(props) {
  const {
    product: {
      image, brand, itemName, options, reviews,
    },
  } = props;
  return (
    <Container>
      <ImageDiv>
        <Image src={image} />
      </ImageDiv>
      <BrandAndItemDiv>
        <BrandDiv>
          {brand}
        </BrandDiv>
        <div>
          {itemName}
        </div>
      </BrandAndItemDiv>
      <PriceDiv>
        {options[0].price}
      </PriceDiv>
      <ReviewsDiv>
        <StarsRating reviews={reviews} />
      </ReviewsDiv>
    </Container>
  );
}

export default RelatedProduct;

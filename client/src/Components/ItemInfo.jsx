import React from 'react';
import styled from 'styled-components';
import StarsRating from './StarsRating';

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

const ItemIdDiv = styled.div`
  width: 100%;
  height: 18px;
  margin-top: 4px;
  margin-bottom: 12px;
  font-size: 12px;
  color: #757575;
`;

const ReviewsAndHeartsDiv = styled.div`
  font-size: 12px;
  font-weight: 700;
  height: 13.5px;
  display: flex;
  justify-content: flex-start;
`;

const ReviewAmount = styled.div`
  padding-left: 5px;
  padding-right: 5px;
`;

const LovesContainer = styled.div`
  display: flex;
  box-sizing: border-box;
`;

const Svg = styled.svg`
  width: 1em;
  box-sizing: border-box;
  display: block;
  position: static;
`;

const HeartsAmountDiv = styled.div`
  margin-left: 5px;
`;

class ItemInfo extends React.Component {
  getAmount(type) {
    const { item: { reviewAmount, hearts } } = this.props;
    let amount;
    if (type === 'reviews') {
      amount = reviewAmount.toString();
    } else {
      amount = hearts.toString();
    }
    if (amount.length >= 4) {
      amount = `${amount.slice(0, amount.length - 3)}K ${type}`;
    } else {
      amount += ' ${type}';
    }
    return amount;
  }

  render() {
    const {
      item: {
        _id, brand, itemName, reviews, hearts, options,
      }, optionChosenIndex,
    } = this.props;
    if (optionChosenIndex !== undefined) {
      return (
        <Container>
          <ProductInfoDiv>
            <BrandDiv>{brand}</BrandDiv>
            <ItemNameDiv>{itemName}</ItemNameDiv>
            <ItemIdDiv>
              ITEM
              {' '}
              {_id.slice(0, 8)}
            </ItemIdDiv>
            <ReviewsAndHeartsDiv>
              <StarsRating reviews={reviews} />
              {' '}
              <ReviewAmount>
                {this.getAmount('reviews')}
                {' '}
                |
              </ReviewAmount>
              <LovesContainer className="lovesContainer">
                <Svg viewBox="0 0 24 24">
                  <path d="M22 3.1c2.7 2.2 2.6 7.2.1 9.7-2.2 2.8-7.4 8.1-9.3 9.6-.5.4-1.1.4-1.6 0-1.8-1.5-7-6.8-9.2-9.6-2.6-2.6-2.7-7.6 0-9.7C4.6.5 9.7.7 12 4.2 14.3.8 19.3.5 22 3.1z" />
                </Svg>
                <HeartsAmountDiv>
                  {this.getAmount('loves')}
                </HeartsAmountDiv>
              </LovesContainer>
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
}

export default ItemInfo;

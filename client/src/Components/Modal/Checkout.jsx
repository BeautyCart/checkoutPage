import React from 'react';
import styled from 'styled-components';
import Button from '../../elements/Button';

const Container = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  width: 257px;
  height: 120px;
  padding-left: 15px;
`;

const BasketTotalDiv = styled.div`
  font-size: 16px;
  width: 257px;
  height: 20px;
  margin-bottom: 12px;
`;

const ButtonsDiv = styled.div`
  width: 255px;
  height: 88px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

class Checkout extends React.Component {
  constructor(props) {
    super(props);
  }

  static parsePrice(price, quantity) {
    price = price.slice(1);
    price = `$${parseFloat(price) * quantity}.00`;
    return price;
  }

  render() {
    const { price, quantity } = this.props;
    return (
      <Container>
        <BasketTotalDiv>
          Basket Total (
          {quantity}
          {' '}
          {(quantity !== '1') ? 'items' : 'item'}
          :
          {' '}
          {Checkout.parsePrice(price, quantity)}
          )
        </BasketTotalDiv>
        <ButtonsDiv>
          <Button redBtn>Checkout</Button>
          <Button>Continue Shopping</Button>
        </ButtonsDiv>
      </Container>
    );
  }
}

export default Checkout;

import React from 'react';
import styled from 'styled-components';
import CheckoutButton from '../../elements/Button';

const Container = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  width: 257px;
  height: 120px;
  padding-left: 16px;
  padding-right: 16px;
`;

const BasketTotalDiv = styled.div`
  font-size: 16px;
  width: 257px;
  height: 20px;
  margin-bottom: 12px;
`;

const ButtonsDiv = styled.div`
  display: flex;
  margin-left: -8px;
  margin-right: -8px;
  flex-flow: row wrap;
`;

function Checkout() {
  return (
    <Container>
      <BasketTotalDiv>
        Basket Total (1 item): $47.00
      </BasketTotalDiv>
      <ButtonsDiv>
        <CheckoutButton redBtn>Checkout</CheckoutButton>
        <CheckoutButton>Continue Shopping</CheckoutButton>
      </ButtonsDiv>
    </Container>
  );
}

export default Checkout;

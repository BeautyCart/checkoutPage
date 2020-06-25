import React from 'react';
import styled from 'styled-components';
import CheckoutButton from '../../elements/Button';
import BtnContainer from '../../elements/Modal/BtnContainer';

function Checkout() {
  return (
    <Container>
      Basket Total (1 item): $47.00
      <BtnContainer>
        <CheckoutButton redBtn>Checkout</CheckoutButton>
      </BtnContainer>
    </Container>
  );
}

export default Checkout;

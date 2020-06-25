import React from 'react';
import styled from 'styled-components';
import CheckoutButton from '../../elements/Modal/CheckoutButton';
import BtnContainer from '../../elements/Modal/BtnContainer';

function Checkout() {
  return (
    <Container>
      Basket Total (1 item): $47.00
      <BtnContainer>
        <CheckoutButton checkout>Checkout</CheckoutButton>
      </BtnContainer>
    </Container>
  );
}

export default Checkout;

import React from 'react';
import CheckoutButton from '../../elements/Modal/CheckoutButton';
import Container from '../../elements/Modal/Container';
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

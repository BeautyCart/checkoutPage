import React from 'react';
import CheckoutButton from '../../elements/Modal/CheckoutButton.js';
import Container from '../../elements/Modal/Container.js';
import BtnContainer from '../../elements/Modal/BtnContainer.js';

function Checkout() {
  return (
    <Container>
      Basket Total (1 item): $47.00
      <BtnContainer>
        <CheckoutButton checkout>Checkout</CheckoutButton>
      </BtnContainer>
    </Container>
  )
}

export default Checkout
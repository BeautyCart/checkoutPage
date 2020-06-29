import React from 'react';
import styled from 'styled-components';

const FreeShippingDiv = styled.div`
  width: 236px;
  height: 34px;
  padding-left: 32px;
  padding-right: 32px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
`;

const Bold = styled.b`
  text-transform: uppercase;
  font-weight: 700;
`;

function FreeShipping() {
  return (
    <FreeShippingDiv>
      <Bold>Free Shipping.</Bold>
      {' '}
      You now qualify for free shipping!
    </FreeShippingDiv>
  );
}

export default FreeShipping;

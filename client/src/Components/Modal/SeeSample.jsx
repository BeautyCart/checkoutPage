import React from 'react';
import styled from 'styled-components';

const SeeSampleDiv = styled.div`
  width: 236px;
  height: 34px;
  padding-left: 32px;
  padding-right: 32px;
  text-align: center;
  border-right: .25px solid #E8E8E8;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
`;

const BasketSpan = styled.span`
  color: blue;
  ${this}:hover {
  text-decoration: underline;
  }
`;

function SeeSample() {
  return (
    <SeeSampleDiv>
      See samples, rewards and promotions in
      {' '}
      <BasketSpan>basket</BasketSpan>
      .
    </SeeSampleDiv>
  );
}

export default SeeSample;

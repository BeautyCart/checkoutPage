import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 568px;
  height: 20px;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 32px;
  padding-right: 50px;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight:700;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: flex-start;
`;

const BrandDiv = styled.div`
  text-transform: uppercase;
  padding-right: 6px;
`;

function Header(props) {
  const { item: { brand, itemName } } = props;
  return (
    <Container>
      <BrandDiv>
        {brand}
      </BrandDiv>
      <div>
        {itemName}
      </div>
    </Container>
  );
}

export default Header;

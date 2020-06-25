import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

function Page(props) {
  return (
    <Container>Hello Page</Container>
  );
}

export default Page;

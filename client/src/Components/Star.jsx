import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 20%;
  position: relative;
  clip-path: polygon(50% 0%, 63% 34%, 98% 35%, 72% 58%, 79% 91%, 50% 70%, 21% 91%, 29% 57%, 2% 35%, 37% 34%);
`;

const Unfilled = styled.div`
  height: 100%;
  width: 100%;
  background-color: #ccc;
  position: absolute;
`;

const Filled = styled.div`
  position: absolute;
  width: ${(props) => `${props.fill}%`};
  height: 100%;
  background-color: black;
`;

function Star(props) {
  const { fill } = props;
  return (
    <Container>
      <Unfilled />
      <Filled fill={fill} />
    </Container>
  );
}

export default Star;

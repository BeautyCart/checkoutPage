import styled from 'styled-components';

export default styled.div`
  border: ${(props) => (props.size)} solid ${(props) => (props.color)};
  padding: 2px;
  border-radius: ${(props) => (props.radius)};
  display: inline-block;
`;

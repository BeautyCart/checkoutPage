import styled from 'styled-components';

export default styled.div`
  border: 3px solid ${(props) => (props.color)};
  padding: 1px;
  border-radius: 8px;
  display: inline-block;
`;

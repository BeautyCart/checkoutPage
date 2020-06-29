import styled from 'styled-components';

export default styled.button`
  font-size: 12px;
  cursor: pointer;
  text-transform: uppercase;
  width: 100%;
  color: ${(props) => (props.color)};
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => `1px solid ${props.border}`};
  font-weight: 700;
  min-height: 40px;
  max-height:40px;
  border-radius: 4px;
  transition: background-color 0.2s ease 0s;
  ${this}:focus {
    outline: none;
  }
`;

import styled from 'styled-components';

export default styled.button`
  font-size: 12px;
  cursor: pointer;
  text-transform: uppercase;
  width: 100%;
  color: ${(props) => (Object.prototype.hasOwnProperty.call(props, 'redBtn') ? 'rgb(255, 255, 255)' : 'black')};
  background-color: ${(props) => (Object.prototype.hasOwnProperty.call(props, 'redBtn') ? 'rgb(236, 4, 15)' : 'white')};
  border: ${(props) => (Object.prototype.hasOwnProperty.call(props, 'redBtn') ? '1px solid transparent' : '1px solid black')};
  font-weight: 700;
  min-height: 40px;
  max-height:40px;
  border-radius: 4px;
  transition: background-color 0.2s ease 0s;
`;

import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import ItemInfo from './ItemInfo';
import Checkout from './Checkout';
import Carousel from './Carousel';

const GreyBackgroundDiv = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,0.4);
  position: fixed;
  left:0;
  top:0;
`;

const ModalDiv = styled.div`
  height: 650px;
  width: 668px;
  margin: auto;
  margin-top: 62px;
  background-color: white;
`;

const MainDiv = styled.div`
  height: 586px;
  width: 551px;
  padding: 32px;
`;

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { closeModal } = this.props;
    closeModal();
  }

  render() {
    const { item, optionChosenIndex } = this.props;
    return (
      <GreyBackgroundDiv onClick={this.handleClick}>
        <ModalDiv>
          <Header item={item} />
          <MainDiv>
            <ItemInfo item={item} optionChosenIndex={optionChosenIndex} />
            <Checkout />
            <Carousel />
          </MainDiv>
        </ModalDiv>
      </GreyBackgroundDiv>
    );
  }
}

export default Modal;

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
  width: 650px;
  height: 668px;
  margin: auto;
  margin-top: 62px;
  background-color: white;
`;

const MainDiv = styled.div`
  height: 551px;
  width: 586px;
  padding: 32px;
  display: flex;
  justify-content: space-between;
`;

const TopDiv = styled.div`
  width: 618px;
  height: 120px;
  display:flex;
  justify-content: flex-start;
`;

const MiddleDiv = styled.div`
  width: 586px;
  height: 35px;
  padding-top: 18px;
  border-top: .25px solid #E8E8E8;
  margin-top: 30px;
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
            <TopDiv>
              <ItemInfo item={item} optionChosenIndex={optionChosenIndex} />
              <Checkout />
            </TopDiv>
            <MiddleDiv />
            <Carousel />
          </MainDiv>
        </ModalDiv>
      </GreyBackgroundDiv>
    );
  }
}

export default Modal;

import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import Button from '../elements/Button';

const QuantityDiv = styled.div`
  width: 54px;
  height: 173px;
`;

const DropDown = styled.select`
  width: 100%;
  height: 40px;
  padding-left: 12px;
  border-radius: 4px;
  border-color: #ccc;
`;

const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 160px;
  height: 88px;
`;

const AddToBasketOrLovesDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 160px;
  height: 173px;
`;

const Container = styled.div`
  width: 222px;
  height: 173px;
  display: flex;
  justify-content: space-between;
`;

class ItemCheckout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  render() {
    const { item, optionChosen } = this.props;
    const { showModal } = this.state;
    return (
      <Container>
        <QuantityDiv>
          <DropDown>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </DropDown>
        </QuantityDiv>
        <AddToBasketOrLovesDiv>
          <ButtonsDiv>
            <Button redBtn type="button">Add To Basket</Button>
            <Button type="button">Add To Loves</Button>
          </ButtonsDiv>
        </AddToBasketOrLovesDiv>
        {showModal ? <Modal item={item} optionChosen={optionChosen} /> : null}
      </Container>
    );
  }
}

export default ItemCheckout;

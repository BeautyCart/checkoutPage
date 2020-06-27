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
      quantity: 1,
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.setQuantity = this.setQuantity.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  setQuantity(quantity) {
    this.setState({
      quantity,
    });
  }

  handleSelect(e) {
    this.setQuantity(e.target.value);
  }

  openModal() {
    this.setState({
      showModal: true,
    });
  }

  closeModal() {
    this.setState({
      showModal: false,
    });
  }

  render() {
    const { item, optionChosenIndex } = this.props;
    const { showModal, quantity } = this.state;
    return (
      <Container>
        <QuantityDiv>
          <DropDown value={quantity} onChange={this.handleSelect}>
            <option key="1" value="1">1</option>
            <option key="2" value="2">2</option>
            <option key="3" value="3">3</option>
            <option key="4" value="4">4</option>
            <option key="5" value="5">5</option>
            <option key="6" value="6">6</option>
            <option key="7" value="7">7</option>
            <option key="8" value="8">8</option>
            <option key="9" value="9">9</option>
            <option key="10" value="10">10</option>
          </DropDown>
        </QuantityDiv>
        <AddToBasketOrLovesDiv>
          <ButtonsDiv>
            <Button redBtn onClick={this.openModal} type="button">Add To Basket</Button>
            <Button type="button">Add To Loves</Button>
          </ButtonsDiv>
        </AddToBasketOrLovesDiv>
        {showModal ? (
          <Modal
            item={item}
            optionChosenIndex={optionChosenIndex}
            closeModal={this.closeModal}
            openModal={this.openModal}
            quantity={quantity}
          />
        )
          : null}
      </Container>
    );
  }
}

export default ItemCheckout;

import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const QuantityDiv = styled.div`
  width: 54px;
  height: 173px;
`;

const AddToBasketOrLovesDiv = styled.div`
  width: 160px;
  height: 173px;
`;

const Container = styled.div`
  width: 222px;
  height: 173px;
  display: flex;
  justify-content: flex-start;
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
          <select>
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
          </select>
        </QuantityDiv>
        <AddToBasketOrLovesDiv>
          <button type="button">Add To Basket</button>
          <button type="button">Add To Loves</button>
        </AddToBasketOrLovesDiv>
        {showModal ? <Modal item={item} optionChosen={optionChosen} /> : null}
      </Container>
    );
  }
}

export default ItemCheckout;

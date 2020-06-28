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

const AddToLovesDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

const Svg = styled.svg`
  width: 1.5em;
  margin-right: 6.75px;
  fill: ${(props) => props.color};
`;

const DescriptionDiv = styled.div`
  color: ${(props) => props.color}
`;

class ItemCheckout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      quantity: 1,
      loved: false,
      tempLoved: false,
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.setQuantity = this.setQuantity.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.svg = this.svg.bind(this);
    this.setLoved = this.setLoved.bind(this);
    this.setTempLoved = this.setTempLoved.bind(this);
  }

  setQuantity(quantity) {
    this.setState({
      quantity,
    });
  }

  setLoved() {
    this.setState((state) => ({
      loved: !state.loved,
    }));
  }

  setTempLoved(reset) {
    this.setState((state) => ({
      tempLoved: !state.tempLoved,
    }));
  }

  closeModal() {
    this.setState({
      showModal: false,
    });
  }

  openModal() {
    this.setState({
      showModal: true,
    });
  }

  handleSelect(e) {
    this.setQuantity(Number(e.target.value));
  }

  svg() {
    const { loved, tempLoved } = this.state;
    let path;
    if (loved || tempLoved) {
      path = <path d="M22 3.1c2.7 2.2 2.6 7.2.1 9.7-2.2 2.8-7.4 8.1-9.3 9.6-.5.4-1.1.4-1.6 0-1.8-1.5-7-6.8-9.2-9.6-2.6-2.6-2.7-7.6 0-9.7C4.6.5 9.7.7 12 4.2 14.3.8 19.3.5 22 3.1z" />;
    } else {
      path = <path d="M22 3.1c2.7 2.2 2.6 7.2.1 9.7-2.2 2.8-7.4 8.1-9.3 9.6-.5.4-1.1.4-1.6 0-1.8-1.5-7-6.8-9.2-9.6-2.6-2.6-2.7-7.6 0-9.7C4.6.5 9.7.7 12 4.2 14.3.8 19.3.5 22 3.1zm-.7.8c-2.4-2.4-7.2-2-8.9 1.5-.1.3-.4.4-.7.2-.1 0-.2-.1-.2-.2-1.6-3.5-6.5-4-8.9-1.5C.4 5.6.5 10 2.7 12.2c2.2 2.7 7.3 8 9.1 9.4.1.1.2.1.3 0 1.8-1.4 6.9-6.7 9.1-9.5 2.3-2.1 2.4-6.5.1-8.2z" />;
    }
    return (
      <Svg color={(loved || tempLoved) ? 'rgb(236, 4, 15)' : 'black'} viewBox="0 0 24 24">
        {path}
      </Svg>
    );
  }

  description() {
    const { loved, tempLoved } = this.state;
    if (loved) {
      if (tempLoved) {
        return 'Unlove';
      }
      return 'Loved';
    }
    return 'Add to loves';
  }

  render() {
    const { item, optionChosenIndex } = this.props;
    const {
      showModal, quantity, tempLoved,
    } = this.state;
    return (
      <Container>
        <QuantityDiv>
          <DropDown value={quantity} onChange={this.handleSelect}>
            <option key={1} value={1}>1</option>
            <option key={2} value={2}>2</option>
            <option key={3} value={3}>3</option>
            <option key={4} value={4}>4</option>
            <option key={5} value={5}>5</option>
            <option key={6} value={6}>6</option>
            <option key={7} value={7}>7</option>
            <option key={8} value={8}>8</option>
            <option key={9} value={9}>9</option>
            <option key={10} value={10}>10</option>
          </DropDown>
        </QuantityDiv>
        <AddToBasketOrLovesDiv>
          <ButtonsDiv>
            <Button redBtn border="transparent" onClick={this.openModal} type="button">Add To Basket</Button>
            <Button border={(tempLoved) ? 'grey' : 'black'} type="button" onClick={this.setLoved} onMouseEnter={this.setTempLoved} onMouseLeave={this.setTempLoved}>
              <AddToLovesDiv>
                {this.svg()}
                <DescriptionDiv color={(tempLoved) ? 'grey' : 'black'}>
                  {this.description()}
                </DescriptionDiv>
              </AddToLovesDiv>
            </Button>
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

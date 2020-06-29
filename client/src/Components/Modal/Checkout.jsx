import React from 'react';
import styled from 'styled-components';
import Button from '../../elements/Button';
import Border from '../../elements/Border';

const Container = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  width: 257px;
  height: 120px;
  padding-left: 15px;
`;

const BasketTotalDiv = styled.div`
  font-size: 16px;
  width: 257px;
  height: 20px;
  margin-bottom: 12px;
`;

const ButtonsDiv = styled.div`
  width: 255px;
  height: 92px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const DescriptionDiv = styled.div`
  color: ${(props) => props.color};
`;

class Checkout extends React.Component {
  static parsePrice(inputPrice, quantity) {
    let price = inputPrice.slice(1);
    price = `$${parseFloat(price) * quantity}.00`;
    return price;
  }

  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      checkoutHover: false,
      buttonChosen: 'checkout',
    };
    this.setHover = this.setHover.bind(this);
    this.setCheckoutHover = this.setCheckoutHover.bind(this);
    this.setButtonChosen = this.setButtonChosen.bind(this);
  }

  setHover() {
    this.setState((state) => ({
      hover: !state.hover,
    }));
  }

  setCheckoutHover() {
    this.setState((state) => ({
      checkoutHover: !state.checkoutHover,
    }));
  }

  setButtonChosen() {
    const { buttonChosen } = this.state;
    if (buttonChosen === 'checkout') {
      this.setState({
        buttonChosen: 'continue shopping',
      });
    } else {
      this.setState({
        buttonChosen: 'checkout',
      });
    }
  }

  render() {
    const { price, quantity } = this.props;
    const { hover, checkoutHover, buttonChosen } = this.state;
    const quantityNumber = Number(quantity);
    return (
      <Container>
        <BasketTotalDiv>
          Basket Total (
          {quantity}
          {' '}
          {(quantityNumber > 1) ? 'items' : 'item'}
          :
          {' '}
          {Checkout.parsePrice(price, quantityNumber)}
          )
        </BasketTotalDiv>
        <ButtonsDiv>
          <Border size="1px" radius="5px" color={(buttonChosen === 'checkout') ? 'black' : 'transparent'}>
            <Button onClick={this.setButtonChosen} backgroundColor={checkoutHover ? '#d4002e' : 'rgb(236, 4, 15)'} onMouseEnter={this.setCheckoutHover} onMouseLeave={this.setCheckoutHover} color="white" border="transparent">Checkout</Button>
          </Border>
          <Border size="1px" radius="5px" color={(buttonChosen === 'continue shopping') ? 'black' : 'transparent'}>
            <Button onClick={this.setButtonChosen} backgroundColor="white" color="black" onMouseEnter={this.setHover} onMouseLeave={this.setHover} border={(hover) ? 'grey' : 'black'}>
              <DescriptionDiv color={(hover) ? 'grey' : 'black'}>
                Continue Shopping
              </DescriptionDiv>
            </Button>
          </Border>
        </ButtonsDiv>
      </Container>
    );
  }
}

export default Checkout;

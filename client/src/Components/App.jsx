import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ItemInfo from './ItemInfo';
import ItemCheckout from './ItemCheckout';
import Options from './Options';

const ProductAndCheckoutDiv = styled.div`
  width: 624px;
  height: 140px;
  margin-bottom: 12px;
  display: flex;
  justify-content: flex-start;
`;

const OptionsDiv = styled.div`
  width: 612px;
  height: 138px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: {},
      // carouselItems:[],
      optionChosenIndex: undefined,
    };
    this.setRandomProduct = this.setRandomProduct.bind(this);
    this.setCurrentItem = this.setCurrentItem.bind(this);
    this.handleOptionClick = this.handleOptionClick.bind(this);
  }

  componentDidMount() {
    App.getProducts()
      .then((response) => this.setRandomProduct(response.data))
      .then(() => this.setOptionChosenIndex(0))
      .catch((err) => console.log('Error getting random product', err));
  }

  static getProducts() {
    return axios.get('/product');
  }

  static getRandomIndex(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  setRandomProduct(productsData) {
    // console.log('inside set random product');
    const index = App.getRandomIndex(0, productsData.length - 1);
    return this.setCurrentItem(productsData[index]);
  }

  setCurrentItem(productData) {
    this.setState({
      currentItem: productData,
    });
    return productData;
  }

  setOptionChosenIndex(index) {
    this.setState({
      optionChosenIndex: index,
    });
  }

  handleOptionClick(index) {
    this.setOptionChosenIndex(index);
  }

  render() {
    const { currentItem, optionChosenIndex } = this.state;
    return (
      <div>
        <ProductAndCheckoutDiv>
          <ItemInfo item={currentItem} optionChosenIndex={optionChosenIndex} />
          <ItemCheckout
            item={currentItem}
            optionChosenIndex={optionChosenIndex}
          />
        </ProductAndCheckoutDiv>
        <OptionsDiv>
          <Options
            item={currentItem}
            options={currentItem.options}
            optionChosenIndex={optionChosenIndex}
            handleOptionClick={this.handleOptionClick}
          />
        </OptionsDiv>
      </div>
    );
  }
}

export default App;

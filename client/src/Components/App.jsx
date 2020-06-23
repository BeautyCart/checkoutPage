import React from 'react';
import ReactDOM from 'react-dom';
import ItemInfo from './ItemInfo.jsx';
import ItemCheckout from './ItemCheckout.jsx';
import Options from './Options.jsx';
import axios from 'axios';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      currentItem:{},
      carouselItems:[],
      optionChosenIndex:undefined
    }
    this.getProducts = this.getProducts.bind(this);
    this.setRandomProduct = this.setRandomProduct.bind(this);
    this.setCurrentItem = this.setCurrentItem.bind(this);
    this.handleOptionClick = this.handleOptionClick.bind(this);
  }
  
  componentDidMount() {
    console.log('component did mount')
    this.getProducts()
      .then((response) => this.setRandomProduct(response.data))
      .then((currentItem) => this.setOptionChosenIndex(0))
      .catch((err) => console.log('Error getting random product', err))
  }

  getProducts() {
    return axios.get('/product')
  }

  getRandomIndex(min, max){
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  setRandomProduct(productsData) {
    console.log('inside set random product')
    const index = this.getRandomIndex(0, productsData.length - 1);
    return this.setCurrentItem(productsData[index])
  }

  setCurrentItem(productData) {
    this.setState({
      currentItem: productData
    })
    return productData
  }
  
  setOptionChosenIndex(index) {
    this.setState({
      optionChosenIndex: index
    })
    return;
  }
  
  handleOptionClick(index) {
    this.setOptionChosenIndex(index);
  }

  render() {
    return (
      <div>
        <ItemInfo item={this.state.currentItem}/>
        <ItemCheckout item={this.state.currentItem} optionChosen={this.state.optionChosenIndex}/>
        <Options options={this.state.currentItem.options} optionChosenIndex={this.state.optionChosenIndex} handleOptionClick={this.handleOptionClick}/>
      </div>
    )
  }
}

export default App
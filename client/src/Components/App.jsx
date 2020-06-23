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
      optionChosen:{}
    }
    this.getProducts = this.getProducts.bind(this);
    this.setRandomProduct = this.setRandomProduct.bind(this);
    this.setCurrentItem = this.setCurrentItem.bind(this);
  }
  
  componentDidMount() {
    console.log('component did mount')
    this.getProducts(this.setRandomProduct);
  }

  getRandom(min, max){
    return Math.floor(Math.random() * (max - min) + min);
  }

  setCurrentItem(productData) {
    this.setState({
      currentItem: productData
    })
  }

  setRandomProduct(productsData) {
    const index = this.getRandom(0, productsData.length - 1);
    this.setCurrentItem(productsData[index])
  }

  getProducts(func) {
    axios.get('/product')
      .then((response) => func(response.data))
      .catch((err) => console.log('Error getting random product', err))
  }

  render() {
    return (
      <div>
        <ItemInfo item={this.state.currentItem}/>
        <ItemCheckout item={this.state.currentItem} optionChosen={this.state.optionChosen}/>
        <Options options={this.state.currentItem.options}/>
      </div>
    )
  }
}

export default App
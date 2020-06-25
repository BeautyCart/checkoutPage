import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      relatedProducts: [],
    };
    this.getProducts = this.getProducts.bind(this);
    this.getRelatedProducts = this.getRelatedProducts.bind(this);
    this.setRelatedProducts = this.setRelatedProducts.bind(this);
  }

  static getProductType(product) {
    let currentProductType = product.itemName.split(' ');
    currentProductType = currentProductType.slice(1);
    currentProductType = currentProductType.join(' ');
    return currentProductType;
  }

  setRelatedProducts(products) {
    this.setState({
      relatedProducts: products,
    });
  }

  static get12RelatedProducts(products) {
    const relatedProducts = [];
    for (let i = 0; i < products.length; i++) {
      relatedProducts.push(products[i]);
    }
    return relatedProducts;
  }

  getRelatedProducts(products) {
    let relatedProducts = [];
    const { typeOfProduct } = this.props;
    for (let i = 0; i < products.length; i++) {
      const currentProductType = Carousel.getProductType(products[i]);
      if (typeOfProduct === currentProductType) {
        relatedProducts.push(products[i]);
      }
    }
    relatedProducts = Carousel.get12RelatedProducts(relatedProducts);
    this.setRelatedProducts(relatedProducts);
  }

  getProducts() {
    axios.get('/product')
      .then((results) => this.getRelatedProducts(results.data))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.getProducts}>Button</button>
      </div>
    );
  }
}

export default Carousel;

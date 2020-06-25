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
    this.setRelatedProducts = this.setRelatedProducts.bind(this);
    this.getProducts = this.getProducts.bind(this);
  }

  setRelatedProducts(products) {
    this.setState({
      relatedProducts: products,
    });
  }

  getProducts() {
    const { typeOfProduct } = this.props;
    axios.get(`/relatedProducts/${typeOfProduct}`)
      .then((results) => this.setRelatedProducts(results.data))
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

import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import RelatedProduct from './RelatedProducts';
import Pages from './Pages';

const Container = styled.div`
  width: 100%;
  height: 298px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HeaderDiv = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  text-align: center;
  margin-bottom: 24px;
`;

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      relatedProducts: [],
    };
    this.setRelatedProducts = this.setRelatedProducts.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.setPage = this.setPage.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  setRelatedProducts(products) {
    this.setState({
      relatedProducts: products,
    });
  }

  setPage(newPage) {
    this.setState({
      page: newPage,
    });
  }

  getProducts() {
    const { typeOfProduct } = this.props;
    axios.get(`/relatedProducts/${typeOfProduct}`)
      .then((results) => this.setRelatedProducts(results.data))
      .catch((err) => console.log(err));
  }

  render() {
    const { relatedProducts, page } = this.state;
    return (
      <Container>
        <HeaderDiv>We Think You'll Also Love</HeaderDiv>
        <RelatedProduct relatedProducts={relatedProducts} page={page} setPage={this.setPage} />
        <Pages page={page} setPage={this.setPage} />
      </Container>
    );
  }
}

export default Carousel;

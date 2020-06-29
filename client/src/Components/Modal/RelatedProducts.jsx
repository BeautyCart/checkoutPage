import React from 'react';
import styled from 'styled-components';
import RelatedProduct from './RelatedProduct';

const Container = styled.div`
  width: 100%;
  height: 254px; 
  display: flex;
  justify-content: flex-start;
`;

const ArrowButton = styled.button`
  min-width: 32px;
  height: 97px;
  border: none;
  padding-left: 0px;
  background-color: transparent;
  position: relative;
  ${this}:focus {
    outline: none;
  }
`;

const SvgLeft = styled.svg`
  width: 18px;
  height: 30px;
  position: absolute;
  left: 0px;
  top: 50%;
  transform: translateY(-50%);
  opacity: ${(props) => (props.opactity)};
`;

const SvgRight = styled.svg`
  width: 18px;
  height: 30px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  opacity: ${(props) => (props.opactity)};
`;

const TrackContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 534px;
  height: 220px;
  overflow: hidden;
  position: relative;
`;

const RelatedProductsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  transform: ${(props) => `translateX(${-534 * props.page}px)`};
  transition-duration: .8s;
`;

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { page, setPage } = this.props;
    if (e.target.id === 'right' && page !== 2) {
      setPage(page + 1);
    }
    if (e.target.id === 'left' && page !== 0) {
      setPage(page - 1);
    }
  }

  render() {
    const { relatedProducts, page } = this.props;
    return (
      <Container>
        <ArrowButton onClick={this.handleClick} type="button">
          <SvgLeft opacity={(page === 0) ? 0.2 : 1} id="left" viewBox="0 0 16 32">
            <path
              d="M2.2 16.052l13.5-14.33c.1-.098.3-.397.3-.695 0-.498-.4-.995-.9-.995-.3 0-.5.2-.6.298L.4 15.256c-.2.298-.4.497-.4.796 0 .298.1.398.2.497l.1.1L14.5 31.67c.1.1.3.3.6.3.5 0 .9-.5.9-.996 0-.3-.2-.498-.3-.697L2.2 16.05z"
            />
          </SvgLeft>
        </ArrowButton>
        <TrackContainer>
          <RelatedProductsContainer page={page}>
            {relatedProducts.map(
              (relatedProduct, index) => (
                <RelatedProduct
                  key={relatedProduct._id}
                  page={page}
                  product={relatedProduct}
                  id={index}
                />
              ),
            )}
          </RelatedProductsContainer>
        </TrackContainer>
        <ArrowButton onClick={this.handleClick} type="button">
          <SvgRight opacity={(page === 2) ? 0.2 : 1} id="right" viewBox="0 0 16 32">
            <path
              d="M13.8 15.952L.3 30.28c-.1.1-.3.398-.3.697 0 .497.4.995.9.995.3 0 .5-.2.6-.3L15.6 16.75c.2-.298.4-.497.4-.796 0-.298-.1-.398-.2-.497l-.1-.1L1.5.33C1.4.23 1.2.032.9.032c-.5 0-.9.497-.9.995 0 .298.2.497.3.696l13.5 14.23z"
            />
          </SvgRight>
        </ArrowButton>
      </Container>
    );
  }
}

export default RelatedProducts;

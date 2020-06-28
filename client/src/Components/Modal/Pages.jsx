import React from 'react';
import styled from 'styled-components';
import Page from './Page';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 10px;
`;

class Pages extends React.Component {
  getPages() {
    const { page, setPage } = this.props;
    const pageIndex = [0, 1, 2];
    const pages = pageIndex.map((currentPage) => {
      let fill;
      if (currentPage === page) {
        fill = true;
      } else {
        fill = false;
      }
      return <Page page={currentPage} setPage={setPage} fill={fill} />;
    });
    return pages;
  }

  render() {
    return (
      <Container>
        {this.getPages()}
      </Container>
    );
  }
}

export default Pages;

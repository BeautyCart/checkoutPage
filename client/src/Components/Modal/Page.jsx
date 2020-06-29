import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 10px;
  height: 10px;
  margin-left: 3px;
  margin-right: 3px;
  clip-path: circle(50% at 50% 50%);
`;

const Unfilled = styled.div`
  height: 100%;
  width: 100%;
  background-color: #ccc;
  position: absolute;
`;

const Filled = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
`;

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { page, setPage } = this.props;
    setPage(page);
  }

  render() {
    const { fill } = this.props;
    return (
      <Container>
        {(fill) ? <Filled /> : <Unfilled onClick={this.handleClick} />}
      </Container>
    );
  }
}

export default Page;

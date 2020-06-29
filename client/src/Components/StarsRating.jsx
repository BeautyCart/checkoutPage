import React from 'react';
import styled from 'styled-components';
import Star from './Star';

const Container = styled.div`
  width: 68.016px;
  height: 13px;
  position: relative;
  display: flex;
  direction: row;
`;

class StarReview extends React.Component {
  starFilled() {
    const { reviews } = this.props;
    const stars = [0, 1, 2, 3, 4];
    const filled = stars.map((star) => {
      let fill;
      if (reviews > star + 1) {
        fill = 100;
      } else if (reviews > star) {
        fill = (reviews - star) * 100;
      } else {
        fill = 0;
      }
      return (
        <Star fill={fill} />
      );
    });
    return filled;
  }

  render() {
    return (
      <Container>
        {this.starFilled()}
      </Container>
    );
  }
}

export default StarReview;

// Wrap children in a CarouselContainer component to display horizontally.

import styled from 'styled-components';

const CarouselContainer = styled.div`
  display: flex;
  grid-area: c;
  margin: 0;
  transition: ${(props) => props.sliding ? 'none' : 'transform 1s ease'};

  transform: ${(props) => {
    if (!props.sliding) {
      // translateX() CSS function repositions an element horizontally on the 2D plane.
      return 'translateX(calc(-80% - 20px))'
    }
    if (props.direction === 'prev') {
      return 'translateX(calc(2 * (-80% - 20px)))'
    }
    return 'translateX(0%)'
  }};
`;

export default CarouselContainer;

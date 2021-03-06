// Wrap CarouselContainer in a Wrapper component to prevent page from scrolling.

import styled from 'styled-components';

// Overflow property hides any components extending beyond the container.
const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: 5% 90% 5%;
  grid-template-areas:
  "b b b"
  "l c r";
  padding: 0 0 2rem 0;
`;

export default Wrapper;

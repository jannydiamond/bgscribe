import styled from 'styled-components/macro'

const Image = styled('img')`
  object-fit: cover;
  object-position: center;
  height: 100%;
  width: 100%;
  filter: grayscale(1);
  transition: filter 0.4s ease-in-out;
`

export default Image

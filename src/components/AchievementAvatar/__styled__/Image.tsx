import styled, { css } from 'styled-components/macro'

type Props = {
  unlocked?: boolean
}

const Image = styled('img')<Props>`
  object-fit: cover;
  object-position: center;
  height: 100%;
  width: 100%;

  ${props => props.unlocked ? null : css`
    filter: grayscale(1);
  `}
`

export default Image

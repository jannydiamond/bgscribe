import styled from 'styled-components/macro'

import IconWrapper from './IconWrapper'

const Wrapper = styled('div')`
  display: flex;
  height: 64px;
  width: 100%;

  &:hover,
  &:focus {
    ${IconWrapper} {
      color: ${(props) => props.theme.colors.primary.dark};
    }
  }
`

export default Wrapper

import styled from 'styled-components/macro'
import { Link as RouterLink } from 'react-router-dom'

import IconWrapper from './IconWrapper'

const Link = styled(RouterLink)`
  display: flex;
  height: 64px;
  width: 100%;
  text-decoration: none;

  &:hover,
  &:focus {
    ${IconWrapper} {
      color: ${(props) => props.theme.colors.primary.dark};
    }
  }
`

export default Link

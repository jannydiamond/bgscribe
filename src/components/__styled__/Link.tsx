import styled from 'styled-components/macro'
import { Link as RouterLink } from 'react-router-dom'

const Link = styled(RouterLink)`
  color: ${(props) => props.theme.colors.secondary.main};
  transition: color 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.secondary.dark};
  }
`

export default Link

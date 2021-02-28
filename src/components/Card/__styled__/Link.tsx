import styled from 'styled-components/macro'
import { Link as RouterLink } from 'react-router-dom'

const Link = styled(RouterLink)`
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
`

export default Link

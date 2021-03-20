import styled from 'styled-components/macro'
import P from './P'

const Error = styled(P)`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.danger.main};
`

export default Error

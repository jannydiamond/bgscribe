import styled from 'styled-components/macro'

const H2 = styled('h2')`
  margin: 0 0 16px;
  font-size: 2rem;
  font-weight: 300;
  color: ${(props) => props.theme.colors.text.main};
`

export default H2

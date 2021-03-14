import styled from 'styled-components/macro'

const Subtitle = styled('p')`
  margin: 0;
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.text.main};
`

export default Subtitle

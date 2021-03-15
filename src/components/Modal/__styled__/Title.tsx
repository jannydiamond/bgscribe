import styled from 'styled-components/macro'

const Title = styled('h2')`
  color: ${(props) => props.theme.colors.text.highlight};
  font-weight: 300;
  margin: 0;
  font-size: 1.25rem;
`

export default Title

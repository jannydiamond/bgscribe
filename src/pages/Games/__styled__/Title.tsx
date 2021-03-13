import styled from 'styled-components/macro'

const Title = styled('h2')`
  margin: 0;
  font-size: 0.875rem;
  font-weight: 300;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.colors.text.highlight};
`

export default Title

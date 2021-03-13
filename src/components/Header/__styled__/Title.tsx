import styled from 'styled-components/macro'

const Title = styled('h1')`
  font-weight: 400;
  font-size: 1.125rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${(props) => props.theme.colors.text.light};
`

export default Title

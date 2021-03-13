import styled from 'styled-components/macro'

const Placeholder = styled('div')`
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.colors.gray.light};
  transition: background-color 0.4s ease-in-out;
`

export default Placeholder

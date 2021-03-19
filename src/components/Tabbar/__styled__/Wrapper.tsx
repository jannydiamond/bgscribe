import styled from 'styled-components/macro'

const Wrapper = styled('div')`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray.light};
`

export default Wrapper

import styled from 'styled-components/macro'

const Wrapper = styled('div')`
  margin: 16px 0 0;
  border: 1px solid ${(props) => props.theme.colors.gray.light};
  padding: 24px;
  border-radius: 16px;
`

export default Wrapper

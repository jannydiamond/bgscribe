import styled from 'styled-components/macro'

const Wrapper = styled('div')`
  padding: 24px;
  margin-bottom: 32px;
  border-radius: 16px;
  background: ${(props) => props.theme.colors.primary.main};
  color: ${(props) => props.theme.colors.text.light};
  font-size: 0.75rem;
`

export default Wrapper

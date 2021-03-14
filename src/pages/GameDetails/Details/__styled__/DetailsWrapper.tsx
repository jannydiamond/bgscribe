import styled from 'styled-components/macro'

const DetailsWrapper = styled('div')`
  padding: 24px;
  border-radius: 16px;
  background: ${(props) => props.theme.colors.primary.main};
  color: ${(props) => props.theme.colors.text.light};
  font-size: 0.75rem;
  transform: translateY(-50%);
`

export default DetailsWrapper

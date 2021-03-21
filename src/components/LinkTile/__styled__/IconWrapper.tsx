import styled from 'styled-components/macro'

const IconWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-left: 8px;
  justify-content: center;
  align-items: flex-end;
  color: ${(props) => props.theme.colors.primary.main};
  transition: color 0.4s ease-in-out;
`

export default IconWrapper

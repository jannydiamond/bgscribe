import styled from 'styled-components'

const CloseButton = styled('button')`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 48px;
  height: 48px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease;
  outline: 0;

  &:hover {
    color: ${(props) => props.theme.colors.secondary.main};
  }
`

export default CloseButton

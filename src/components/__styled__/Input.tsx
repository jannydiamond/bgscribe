import styled from 'styled-components/macro'

const Input = styled('input')`
  height: 40px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.gray.main};
  transition: border-color 0.2s ease-in-out;
  outline: 0;
  padding: 0 8px;

  &:hover,
  &:focus {
    border-color: ${(props) => props.theme.colors.primary.main};
    caret-color: ${(props) => props.theme.colors.primary.main};
  }
`

export default Input

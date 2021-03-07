import styled from 'styled-components/macro'

const Input = styled('textarea')`
  min-height: 120px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.gray.main};
  transition: border-color 0.2s ease-in-out;
  outline: 0;
  padding: 8px;
  resize: vertical;

  &:hover,
  &:focus {
    border-color: ${(props) => props.theme.colors.primary.main};
    caret-color: ${(props) => props.theme.colors.primary.main};
  }
`

export default Input

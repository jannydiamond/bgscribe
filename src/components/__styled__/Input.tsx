import styled from 'styled-components/macro'

const Input = styled('input')`
  height: 40px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.gray.main};
  transition: border-color 0.2s ease-in-out;
  outline: 0;
  padding: 0 8px;
  color: ${(props) => props.theme.colors.text.dark};
  font-size: 0.875rem;
  font-family: 'Open Sans', Arial, sans-serif;

  &:hover,
  &:focus {
    border-color: ${(props) => props.theme.colors.primary.main};
    caret-color: ${(props) => props.theme.colors.primary.main};
  }

  &[type='radio'],
  &[type='checkbox'] {
    position: absolute;
    opacity: 0;
  }
`

export default Input

import styled from 'styled-components/macro'
import { ButtonVariants } from 'types'

type Props = {
  variant?: ButtonVariants
  size?: 'default' | 'small'
}

const Button = styled('button')<Props>`
  padding: 0 16px;
  height: ${(props) => (props.size === 'small' ? '40px' : '48px')};
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${(props) =>
    props.variant ? props.theme.button[props.variant].background : props.theme.button['primary'].background};
  color: ${(props) => props.variant ? props.theme.button[props.variant].color : props.theme.button['primary'].color};
  border: 1px solid ${(props) => props.variant ? props.theme.button[props.variant].borderColor : props.theme.button['primary'].borderColor};
  font-size: 0.875rem;
  font-weight: 400;
  font-family: 'Open Sans', Arial, sans-serif;
  line-height: 1;
  outline: none;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out, border-color 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.variant ? props.theme.button[props.variant].hover.background : props.theme.button['primary'].hover.background};
    border-color: ${(props) => props.variant ? props.theme.button[props.variant].hover.borderColor : props.theme.button['primary'].hover.borderColor};
    color: ${(props) => props.variant ? props.theme.button[props.variant].hover.color : props.theme.button['primary'].hover.color};
  }

  &:disabled {
    background-color: ${(props) => props.variant ? props.theme.button[props.variant].disabled.background : props.theme.button['primary'].disabled.background};
    border-color: ${(props) => props.variant ? props.theme.button[props.variant].disabled.borderColor : props.theme.button['primary'].disabled.borderColor};
    color: ${(props) => props.variant ? props.theme.button[props.variant].disabled.color : props.theme.button['primary'].disabled.color};
    pointer-events: none;
  }

  + button {
    margin-left: 16px;
  }
`

export default Button

import styled from 'styled-components/macro'

type Props = {
  variant?: 'primary' | 'secondary' | 'danger'
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
    props.variant === 'danger'
      ? props.theme.colors.danger.main
      : props.variant === 'secondary'
      ? props.theme.colors.secondary.main
      : props.theme.colors.primary.main};
  color: #fff;
  outline: none;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) =>
      props.variant === 'danger'
        ? props.theme.colors.danger.dark
        : props.variant === 'secondary'
        ? props.theme.colors.secondary.dark
        : props.theme.colors.primary.dark};
  }

  + button {
    margin-left: 16px;
  }
`

export default Button

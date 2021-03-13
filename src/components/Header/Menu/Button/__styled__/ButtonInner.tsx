import styled from 'styled-components/macro'

import Button from 'components/__styled__/Button'

type Props = {
  isOpen: boolean
}

const ButtonInner = styled(Button)<Props>`
  color: ${(props) => props.theme.colors.text.light};
  margin-right: -24px;
  border-radius: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 100%;
  background: ${(props) =>
    props.isOpen ? props.theme.colors.primary.dark : 'transparent'};
  transition: background-color 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.text.light};
    background-color: ${(props) => props.theme.colors.primary.dark};
  }
`

export default ButtonInner

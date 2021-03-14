import styled from 'styled-components/macro'

type Props = {
  basic?: boolean
}

const Header = styled('header')<Props>`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.basic ? 'center' : 'space-between')};
  padding: 0 24px;
  background: ${(props) => props.theme.colors.primary.main};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`

export default Header

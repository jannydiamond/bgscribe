import styled from 'styled-components/macro'

import Link from 'components/__styled__/Link'

const BackLinkInner = styled(Link)`
  color: ${(props) => props.theme.colors.text.light};
  margin-left: -24px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 100%;
  background: transparent;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.text.light};
    background-color: ${(props) => props.theme.colors.primary.dark};
  }
`

export default BackLinkInner

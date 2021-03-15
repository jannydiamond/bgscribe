import styled, { css } from 'styled-components/macro'

type Props = {
  noMenu?: boolean
}

const cssNoMenu = css`
  flex: 1 1 auto;
  padding-right: 40px;
  text-align: center;
`

const Title = styled('h1')<Props>`
  font-weight: 400;
  font-size: 1.125rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${(props) => props.theme.colors.text.light};

  ${(props) => (props.noMenu ? cssNoMenu : null)}
`

export default Title

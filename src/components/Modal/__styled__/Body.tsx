import styled from 'styled-components/macro'

type Props = {
  hasFooter?: boolean
}

const Body = styled('div')<Props>`
  height: ${(props) =>
    props.hasFooter ? 'calc(100% - (64px * 2))' : 'calc(100% - 64px)'};
`

export default Body

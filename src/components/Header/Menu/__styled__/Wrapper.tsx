import styled from 'styled-components/macro'

type Props = {
  ref: any
}

const Wrapper = styled('div')<Props>`
  position: relative;
  width: 64px;
  height: 100%;
  margin-right: -24px;
`

export default Wrapper

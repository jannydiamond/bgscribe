import styled from 'styled-components/macro'

type Props = {
  noImage: boolean
}

const Wrapper = styled('div')<Props>`
  ${(props) =>
    props.noImage ? 'margin-bottom: 32px;' : 'margin-bottom: -24px;'}
`

export default Wrapper

import styled from 'styled-components/macro'
import { fadeIn } from 'themes/helpers/animations'

const Wrapper = styled('div')`
  position: relative;
  top: 0;
  padding-top: 16px;
  animation: ${fadeIn({
      topStart: '0',
      topEnd: '0',
    })}
    0.2s ease-in both;
`

export default Wrapper

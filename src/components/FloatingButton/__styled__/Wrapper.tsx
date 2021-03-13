import styled from 'styled-components/macro'

import Button from 'components/__styled__/Button'

const Wrapper = styled(Button)`
  border-radius: 20px;
  position: fixed;
  bottom: calc(24px + 48px);
  right: 24px;
  z-index: 10;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`

export default Wrapper

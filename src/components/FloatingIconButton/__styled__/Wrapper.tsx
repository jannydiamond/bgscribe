import styled from 'styled-components/macro'
import Button from 'components/__styled__/Button'

const Wrapper = styled(Button)`
  padding: 0;
  height: 64px;
  width: 64px;
  border-radius: 32px;
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 10;
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
    0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);

  .material-icons,
  .material-icons-outlined {
    font-size: 28px;
  }
`

export default Wrapper

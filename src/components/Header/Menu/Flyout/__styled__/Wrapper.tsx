import styled from 'styled-components/macro'

type Props = {
  isOpen: boolean
}

const Wrapper = styled('div')<Props>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 5;
  background: #fff;
  box-shadow: 0 0 10px rgb(0 0 0 / 14%);
  min-width: 220px;
`

export default Wrapper

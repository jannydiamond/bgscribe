import styled, { css } from 'styled-components/macro'
import { fadeIn } from 'themes/helpers/animations'
import { SnackbarType } from 'types'

type Props = {
  type: SnackbarType
  isVisible: boolean
}

const snackbarIn = css`
  animation: ${fadeIn({ bottomEnd: '24px' })} 1s ease-in both;
`

const Wrapper = styled('div')<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: -100%;
  left: calc(50% - 180px);
  z-index: 2000;
  min-height: 48px;
  width: 360px;
  padding: 24px 16px 16px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgb(0 0 0 / 14%);

  color: ${(props) => props.theme.snackbar[props.type].color};
  background: ${(props) => props.theme.snackbar[props.type].bg};

  ${(props) => (props.isVisible ? snackbarIn : null)};
`

export default Wrapper

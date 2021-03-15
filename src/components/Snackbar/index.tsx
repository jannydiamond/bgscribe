import Icon from 'components/Icon'
import React from 'react'
import ReactDOM from 'react-dom'

import { SnackbarType } from 'types'

import CloseButton from './__styled__/CloseButton'
import Content from './__styled__/Content'
import Wrapper from './__styled__/Wrapper'

type Props = {
  type: SnackbarType
  isVisible: boolean
  children: React.ReactChild
  handleClose: () => void
}

const Snackbar = (props: Props) => {
  const domEl = document.getElementById('snackbar-root')

  if (!domEl) return null

  return ReactDOM.createPortal(
    <Wrapper type={props.type} isVisible={props.isVisible}>
      <Content>{props.children}</Content>
      <CloseButton onClick={props.handleClose}>
        <Icon icon="close" />
      </CloseButton>
    </Wrapper>,
    domEl
  )
}

export default React.memo(Snackbar)

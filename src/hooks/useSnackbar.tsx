import React, { useState } from 'react'
import { SnackbarType } from 'types'
import Snackbar from 'components/Snackbar'

type SnackbarProps = {
  type: SnackbarType
  children: React.ReactChild
  closeCallback?: () => void
}

export type RenderSnackbarType = (props: SnackbarProps) => JSX.Element

export const useSnackbar = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const show = () => setIsVisible(true)
  const hide = () => setIsVisible(false)

  const RenderSnackbar: RenderSnackbarType = ({
    type,
    children,
    closeCallback,
  }) => {
    const handleClose = () => {
      hide()
      if (closeCallback) {
        closeCallback()
      }
    }

    return (
      <>
        {isVisible && (
          <Snackbar
            type={type}
            isVisible={isVisible}
            handleClose={closeCallback ? closeCallback : handleClose}
          >
            {children}
          </Snackbar>
        )}
      </>
    )
  }

  return {
    show,
    hide,
    RenderSnackbar,
  }
}

import React, { useState } from 'react'

import Modal from 'components/Modal'

type ModalProps = {
  titleLabel: string
  children: React.ReactChild
  closeCallback?: () => void
  footer?: React.ReactNode
}

export type RenderModalType = (props: ModalProps) => JSX.Element

// Renders a modal to the modal root and handles the visibility state
// of this modal.
//
// NOTE: Each modal you want to render should use a separate hook!!!
// Otherwise your modals will share their visibility state which might lead
// to overlapping and unclosable elements.
export const useModal = () => {
  const [isVisible, setIsVisible] = useState(false)
  const show = () => setIsVisible(true)
  const hide = () => setIsVisible(false)
  const RenderModal: RenderModalType = ({
    titleLabel,
    children,
    closeCallback,
    footer,
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
          <Modal
            titleLabel={titleLabel}
            closeModal={handleClose}
            footer={footer}
          >
            {children}
          </Modal>
        )}
      </>
    )
  }

  return {
    show,
    hide,
    RenderModal,
  }
}

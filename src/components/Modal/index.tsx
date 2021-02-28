import React from 'react'
import ReactDOM from 'react-dom'

import Icon from 'components/Icon'
import Wrapper from './__styled__/Wrapper'
import Backdrop from './__styled__/Backdrop'
import Content from './__styled__/Content'
import Header from './__styled__/Header'
import Body from './__styled__/Body'
import Title from './__styled__/Title'
import CloseButton from './__styled__/CloseButton'
import Footer from './__styled__/Footer'

type Props = {
  titleLabel: string
  children: React.ReactChild
  closeModal: () => void
  footer?: React.ReactNode
}

const Modal = ({ titleLabel, children, closeModal, footer }: Props) => {
  const domEl = document.getElementById('modal-root')

  if (!domEl) return null

  return ReactDOM.createPortal(
    <>
      <Wrapper>
        <Backdrop onClick={closeModal} />
        <Content>
          <Header>
            <Title>{titleLabel}</Title>
            <CloseButton onClick={closeModal}>
              <Icon icon="close" />
            </CloseButton>
          </Header>
          <Body hasFooter={footer ? true : false}>{children}</Body>
          {footer && <Footer>{footer}</Footer>}
        </Content>
      </Wrapper>
    </>,
    domEl
  )
}

export default React.memo(Modal)

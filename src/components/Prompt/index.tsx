import React from 'react'

import ModalBodyWrapper from 'components/__styled__/ModalBodyWrapper'
import ModalFooterWrapper from 'components/__styled__/ModalFooterWrapper'
import Button from 'components/__styled__/Button'

const Prompt = ({
  yesHandler,
  noHandler,
  children,
}: {
  yesHandler: () => void
  noHandler: () => void
  children?: React.ReactChild
}) => {
  return (
    <React.Fragment>
      <ModalBodyWrapper hasFooter={true}>{children}</ModalBodyWrapper>
      <ModalFooterWrapper>
        <Button onClick={noHandler} variant="secondary">
          No
        </Button>
        <Button onClick={yesHandler}>Yes</Button>
      </ModalFooterWrapper>
    </React.Fragment>
  )
}

export default React.memo(Prompt)

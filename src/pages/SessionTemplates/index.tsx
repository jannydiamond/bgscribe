import React from 'react'

import { useModal } from 'hooks/useModal'

import FloatingButton from 'components/FloatingButton'

import AddTemplateModal from './AddModal'
import Header from './Header'
import Main from 'components/__styled__/Main'
import SessionTemplateList from './SessionTemplateList'

const SessionTemplates = () => {
  const addSessionTemplateModal = useModal()

  return (
    <>
      <Header />
      <Main>
        <SessionTemplateList />
      </Main>
      <FloatingButton
        variant="secondary"
        onClick={() => addSessionTemplateModal.show()}
      >
        Add Template
      </FloatingButton>
      <AddTemplateModal modal={addSessionTemplateModal} />
    </>
  )
}

export default React.memo(SessionTemplates)

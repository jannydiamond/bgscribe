import React from 'react'

import { useModal } from 'hooks/useModal'

import AddSessionTemplateModal from 'pages/Settings/SessionTemplates/AddSessionTemplateModal'
import FloatingButton from 'components/FloatingButton'

import Header from './Header'
import Main from 'components/__styled__/Main'
import SessionTemplateList from './SessionTemplateList'
import { useSelector } from 'react-redux'
import { selectContentIsLoading } from 'Redux/ContentLoading'

const SessionTemplates = () => {
  const addSessionTemplateModal = useModal()
  const contentIsLoading = useSelector(selectContentIsLoading)

  if (contentIsLoading) {
    return null
  }

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
      <AddSessionTemplateModal modal={addSessionTemplateModal} />
    </>
  )
}

export default React.memo(SessionTemplates)

import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { RootState } from 'Redux/store'
import { selectSessionTemplateById } from 'Redux/SessionTemplates'

import Main from 'components/__styled__/Main'

import Header from './Header'
import Notes from './Notes'

const SessionTemplateDetails = () => {
  // @ts-ignore
  const { templateId } = useParams()

  const template = useSelector((state: RootState) =>
    selectSessionTemplateById(state, { templateId })
  )

  if (!template) {
    return null
  }

  return (
    <>
      <Header templateId={templateId} />
      <Main>
        <Notes templateId={templateId} />
      </Main>
    </>
  )
}

export default React.memo(SessionTemplateDetails)

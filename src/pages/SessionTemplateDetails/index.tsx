import React from 'react'
import MDEditor from '@uiw/react-md-editor'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Main from 'components/__styled__/Main'
import Note from './__styled__/Note'
import Headline from './__styled__/Headline'
import SessionTemplateDetailsHeader from './SessionTemplateDetailsHeader'
import { RootState } from 'Redux/store'
import { selectSessionTemplateById } from 'Redux/SessionTemplates'

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
      <SessionTemplateDetailsHeader templateId={templateId} />
      <Main>
        <Headline>Preview</Headline>
        {template.template ? (
          <Note>
            <MDEditor.Markdown source={template.template} />
          </Note>
        ) : null}
      </Main>
    </>
  )
}

export default React.memo(SessionTemplateDetails)

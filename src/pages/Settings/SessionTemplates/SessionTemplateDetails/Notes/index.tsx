import React from 'react'
import { useSelector } from 'react-redux'
import MDEditor from '@uiw/react-md-editor'

import { RootState } from 'Redux/store'
import { selectSessionTemplateById } from 'Redux/SessionTemplates'

import H2 from 'components/__styled__/H2'
import Wrapper from './__styled__/Wrapper'

type Props = {
  templateId: string
}

const Notes = (props: Props) => {
  const template = useSelector((state: RootState) =>
    selectSessionTemplateById(state, { templateId: props.templateId })
  )

  return (
    <>
      <H2>Preview</H2>
      {template.template ? (
        <Wrapper>
          <MDEditor.Markdown source={template.template} />
        </Wrapper>
      ) : null}
    </>
  )
}

export default React.memo(Notes)

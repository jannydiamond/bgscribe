import React from 'react'
import Fieldset from 'components/__styled__/Fieldset'
import Label from 'components/__styled__/Label'
import LabelText from 'components/__styled__/LabelText'
import MDEditor from '@uiw/react-md-editor'

type Props = {
  template: string
  onChange: (value?: string) => void
}

const TemplateInput = (props: Props) => {
  return (
    <Fieldset>
      <Label htmlFor="template">
        <LabelText>Template (with markdown support)</LabelText>
        <MDEditor
          id="sessionNote"
          value={props.template}
          onChange={props.onChange}
          hideToolbar={true}
          preview="edit"
        />
      </Label>
    </Fieldset>
  )
}

export default React.memo(TemplateInput)

import React from 'react'
import Fieldset from 'components/__styled__/Fieldset'
import Label from 'components/__styled__/Label'
import LabelText from 'components/__styled__/LabelText'
import MDEditor from '@uiw/react-md-editor'

type Props = {
  onChange: (value?: string) => void
  value: string
}

const SessionNoteInput = (props: Props) => {
  return (
    <Fieldset>
      <Label htmlFor="sessionNote">
        <LabelText>Note (with markdown support)</LabelText>
        <MDEditor
          id="sessionNote"
          value={props.value}
          onChange={props.onChange}
          hideToolbar={true}
          preview="edit"
        />
      </Label>
    </Fieldset>
  )
}

export default React.memo(SessionNoteInput)

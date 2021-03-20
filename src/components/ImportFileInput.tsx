import React from 'react'

import Fieldset from 'components/__styled__/Fieldset'
import Label from 'components/__styled__/Label'
import LabelText from 'components/__styled__/LabelText'
import FileInput from 'components/__styled__/FileInput'

type Props = {
  value?: string
  handleChange: (event: any) => void
}

const ImportFileInput = (props: Props) => {
  return (
    <Fieldset>
      <Label htmlFor="importFile">
        <LabelText>File</LabelText>
        <FileInput
          id="importFile"
          type="file"
          accept=".json"
          onChange={props.handleChange}
          value={props.value}
        />
      </Label>
    </Fieldset>
  )
}

export default React.memo(ImportFileInput)

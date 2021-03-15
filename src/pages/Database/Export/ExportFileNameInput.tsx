import React from 'react'

import Fieldset from 'components/__styled__/Fieldset'
import Label from 'components/__styled__/Label'
import LabelText from 'components/__styled__/LabelText'
import Input from 'components/__styled__/Input'

type Props = {
  value: string
  handleChange: (event: any) => void
}

const ExportFileNameInput = (props: Props) => {
  return (
    <Fieldset>
      <Label htmlFor="exportFileName">
        <LabelText>Filename</LabelText>
        <Input
          id="exportFileName"
          onChange={props.handleChange}
          value={props.value}
        />
      </Label>
    </Fieldset>
  )
}

export default React.memo(ExportFileNameInput)

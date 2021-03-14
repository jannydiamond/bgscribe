import React from 'react'

import Fieldset from 'components/__styled__/Fieldset'
import Label from 'components/__styled__/Label'
import LabelText from 'components/__styled__/LabelText'
import Input from 'components/__styled__/Input'

type Props = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const NameInput = (props: Props) => {
  return (
    <Fieldset>
      <Label htmlFor="templateName">
        <LabelText>Name</LabelText>
        <Input
          type="text"
          id="templateName"
          onChange={props.onChange}
          value={props.value}
        />
      </Label>
    </Fieldset>
  )
}

export default React.memo(NameInput)

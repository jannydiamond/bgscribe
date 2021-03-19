import React from 'react'
import Fieldset from 'components/__styled__/Fieldset'
import Label from 'components/__styled__/Label'
import LabelText from 'components/__styled__/LabelText'
import Input from 'components/__styled__/Input'

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

const VersionInput = (props: Props) => {
  return (
    <Fieldset>
      <Label htmlFor="achievementSetVersion">
        <LabelText>Version</LabelText>
        <Input
          id="achievementSetVersion"
          type="number"
          onChange={props.onChange}
          value={props.value}
        />
      </Label>
    </Fieldset>
  )
}

export default React.memo(VersionInput)

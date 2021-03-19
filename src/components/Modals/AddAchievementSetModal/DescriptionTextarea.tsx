import React from 'react'
import Fieldset from 'components/__styled__/Fieldset'
import Label from 'components/__styled__/Label'
import LabelText from 'components/__styled__/LabelText'
import Textarea from 'components/__styled__/Textarea'

type Props = {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  value: string
}

const DescriptionTextarea = (props: Props) => {
  return (
    <Fieldset>
      <Label htmlFor="achievementSetDescription">
        <LabelText>Description</LabelText>
        <Textarea
          id="achievementSetDescription"
          onChange={props.onChange}
          value={props.value}
        />
      </Label>
    </Fieldset>
  )
}

export default React.memo(DescriptionTextarea)

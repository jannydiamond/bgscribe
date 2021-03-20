import React from 'react'
import Fieldset from 'components/__styled__/Fieldset'
import Label from 'components/__styled__/Label'
import LabelText from 'components/__styled__/LabelText'
import Input from 'components/__styled__/Input'

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

const AuthorEmailInput = (props: Props) => {
  return (
    <Fieldset>
      <Label htmlFor="achievementSetAuthorEmail">
        <LabelText>Author email</LabelText>
        <Input
          id="achievementSetAuthorEmail"
          onChange={props.onChange}
          value={props.value}
        />
      </Label>
    </Fieldset>
  )
}

export default React.memo(AuthorEmailInput)

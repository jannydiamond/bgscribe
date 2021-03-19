import React from 'react'
import { AchievementType } from 'types'

import Fieldset from 'components/__styled__/Fieldset'
import Legend from 'components/__styled__/Legend'
import Label from 'components/__styled__/Label'
import LabelText from 'components/__styled__/LabelText'
import Input from 'components/__styled__/Input'

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: AchievementType
}

const TitleInput = (props: Props) => {
  return (
    <Fieldset>
      <Legend>Type</Legend>
      <Label htmlFor="achievementTypeRegular" isFormOption>
        <LabelText isFormOption isChecked={props.value.type === 'regular'}>
          Regular
        </LabelText>
        <Input
          id="achievementTypeRegular"
          type="radio"
          name="achievementType"
          onChange={props.onChange}
          value="regular"
        />
      </Label>
      <Label htmlFor="achievementTypeProgress" isFormOption disabled>
        <LabelText isFormOption isChecked={props.value.type === 'progress'}>
          Progress (coming soon)
        </LabelText>
        <Input
          id="achievementTypeProgress"
          type="radio"
          name="achievementType"
          onChange={props.onChange}
          value="progress"
          disabled
        />
      </Label>
    </Fieldset>
  )
}

export default React.memo(TitleInput)

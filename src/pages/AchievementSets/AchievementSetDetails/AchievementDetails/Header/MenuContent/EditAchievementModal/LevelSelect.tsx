import React, { useState } from 'react'
import { OptionTypeBase } from 'react-select'

import Fieldset from 'components/__styled__/Fieldset'
import Label from 'components/__styled__/Label'
import LabelText from 'components/__styled__/LabelText'
import Select from 'components/__styled__/Select'

type Props = {
  options: OptionTypeBase
  value: OptionTypeBase
  onChange: (option: OptionTypeBase) => void
}

const LevelSelect = (props: Props) => {
  const [selected, setSelected] = useState<OptionTypeBase>(props.value)

  const handleChange = (option: OptionTypeBase) => {
    setSelected(option)
    if (option) {
      props.onChange(option)
    }
  }

  return (
    <Fieldset>
      <Label htmlFor="sessionNote">
        <LabelText>Choose level of Achievement</LabelText>
        <Select
          options={props.options}
          value={selected}
          onChange={handleChange}
        />
      </Label>
    </Fieldset>
  )
}

export default React.memo(LevelSelect)

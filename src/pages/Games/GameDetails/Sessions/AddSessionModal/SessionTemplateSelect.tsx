import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { OptionTypeBase } from 'react-select'

import { SessionTemplateId } from 'types'

import { selectSessionTemplatesList } from 'Redux/SessionTemplates'

import Fieldset from 'components/__styled__/Fieldset'
import Label from 'components/__styled__/Label'
import LabelText from 'components/__styled__/LabelText'
import Select from 'components/__styled__/Select'

type Props = {
  onChange: (id?: SessionTemplateId) => void
}

const SessionTemplateSelect = (props: Props) => {
  const templates = useSelector(selectSessionTemplatesList)

  const options = [
    { value: undefined, label: 'None' },
    ...templates.map((template) => ({
      value: template.id,
      label: template.name,
    })),
  ]

  const [selected, setSelected] = useState<OptionTypeBase | null>(options[0])

  const handleChange = (option: OptionTypeBase | null) => {
    setSelected(option)
    if (option) {
      props.onChange(option.value)
    }
  }

  return (
    <Fieldset>
      <Label htmlFor="sessionNote">
        <LabelText>Choose Template for Note</LabelText>
        <Select options={options} value={selected} onChange={handleChange} />
      </Label>
    </Fieldset>
  )
}

export default React.memo(SessionTemplateSelect)

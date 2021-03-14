import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import {OptionTypeBase} from 'react-select'
import Select from 'react-select'
import { selectSessionTemplatesList } from 'Redux/SessionTemplates'
import {SessionTemplateId} from 'types'

type Props = {
  onChange: (id?: SessionTemplateId) => void
}

const SessionTemplateSelect = (props: Props) => {
  const templates = useSelector(selectSessionTemplatesList)

  const options = [
    { value: undefined, label: 'None' },
    ...templates.map(template => ({ value: template.id, label: template.name }))
  ]

  const [selected, setSelected] = useState<OptionTypeBase | null>(options[0])

  const handleChange = (option: OptionTypeBase | null) => {
    setSelected(option)
    if (option) {
      props.onChange(option.value)
    }
  }

  return <Select options={options} value={selected} onChange={handleChange} />
}

export default React.memo(SessionTemplateSelect)

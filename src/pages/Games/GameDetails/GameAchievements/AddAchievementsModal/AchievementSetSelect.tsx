import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { AchievementSetId, SelectOptions } from 'types'

import Fieldset from 'components/__styled__/Fieldset'
import Label from 'components/__styled__/Label'
import LabelText from 'components/__styled__/LabelText'
import Select from 'components/__styled__/Select'
import { selectAchievementSetArray } from 'Redux/AchievementSets'

type Props = {
  onChange: (achievementSetIds: AchievementSetId[]) => void
}

const AchievementSetSelect = (props: Props) => {
  const allAchievementSets = useSelector(selectAchievementSetArray)

  const options: SelectOptions = [
    ...allAchievementSets.map((set) => {
      return {
        label: set.title,
        value: set.id,
      }
    }),
  ]

  const [selected, setSelected] = useState<SelectOptions>([])

  const handleChange = (options: SelectOptions) => {
    setSelected(options)

    props.onChange(options.map((option) => option.value))
  }

  return (
    <Fieldset>
      <Label>
        <LabelText>Choose Achievement Sets to add</LabelText>
        <Select
          options={options}
          value={selected}
          onChange={handleChange}
          isMulti
        />
      </Label>
    </Fieldset>
  )
}

export default React.memo(AchievementSetSelect)

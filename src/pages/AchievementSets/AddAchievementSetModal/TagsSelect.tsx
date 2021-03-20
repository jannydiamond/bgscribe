import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { OptionTypeBase } from 'react-select'

import { selectAchievementSetsTags } from 'Redux/AchievementSets'

import Fieldset from 'components/__styled__/Fieldset'
import Label from 'components/__styled__/Label'
import LabelText from 'components/__styled__/LabelText'
import CreatableSelect from 'components/__styled__/CreatableSelect'

type Props = {
  value: OptionTypeBase | null
  onChange: (option: OptionTypeBase | null) => void
}

const TagsSelect = (props: Props) => {
  const allTags = useSelector(selectAchievementSetsTags)

  const options: OptionTypeBase = [
    ...allTags.map((tag) => {
      return {
        label: tag,
        value: tag,
      }
    }),
  ]

  const [selected, setSelected] = useState<OptionTypeBase | null>(props.value)

  const handleChange = (option: OptionTypeBase | null) => {
    setSelected(option)
    if (option) {
      props.onChange(option)
    }
  }

  return (
    <Fieldset>
      <Label htmlFor="achievementSetTags">
        <LabelText>Tags</LabelText>
        <CreatableSelect
          options={options}
          isMulti
          value={selected}
          onChange={handleChange}
        />
      </Label>
    </Fieldset>
  )
}

export default React.memo(TagsSelect)

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { OptionTypeBase } from 'react-select'

import * as types from 'types'

import { editAchievement } from 'Redux/Achievements/sideEffects'

import ModalBodyWrapper from 'components/__styled__/ModalBodyWrapper'
import Form from 'components/__styled__/Form'
import TypeRadio from './TypeRadio'
import TitleInput from './TitleInput'
import DescriptionTextarea from './DescriptionTextarea'
import LevelSelect from './LevelSelect'
import ImageFileInput from './ImageFileInput'
import AchievementPreview from './__styled__/AchievementPreview'

type Props = {
  modal: types.Modal
  achievement: types.Achievement
}

const Body = ({ modal, achievement }: Props) => {
  const dispatch = useDispatch()

  const options = [
    ...types.ACHIEVEMENT_LEVELS.map((level) => ({
      value: level,
      label: level,
    })),
  ]

  const [type, setType] = useState<types.AchievementType>(achievement.type)
  const [title, setTitle] = useState<string>(achievement.title)
  const [description, setDescription] = useState<string>(
    achievement.description ?? ''
  )
  const [level, setLevel] = useState<OptionTypeBase>({
    value: achievement.level,
    label: achievement.level,
  })
  const [image, setImage] = useState<string>(achievement.image ?? '')

  const handleTypeChange = (event: any) =>
    setType({
      type: event.target.value,
    })

  const handleTitleChange = (event: any) => setTitle(event.target.value)
  const handleDescriptionChange = (event: any) =>
    setDescription(event.target.value)
  const handleLevelChange = (option: OptionTypeBase) => setLevel(option)
  const handleImageChange = (event: any) => {
    const reader = new FileReader()

    reader.onload = async (event: any) => {
      setImage(event.target.result)
    }

    reader.readAsDataURL(event.target.files[0])
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()

    dispatch(
      editAchievement({
        id: achievement.id,
        type,
        title,
        description,
        level: level.value,
        image,
      })
    )

    modal.hide()
  }

  return (
    <ModalBodyWrapper>
      <Form id="editAchievement" onSubmit={handleSubmit}>
        <TypeRadio onChange={handleTypeChange} value={type} />
        <TitleInput onChange={handleTitleChange} value={title} />
        <DescriptionTextarea
          onChange={handleDescriptionChange}
          value={description}
        />
        <LevelSelect
          options={options}
          onChange={handleLevelChange}
          value={level}
        />
        <ImageFileInput onChange={handleImageChange} />
      </Form>
      <AchievementPreview level={level.value} noImage>
        {image ? <img src={image} alt="preview" /> : 'Achievement preview'}
      </AchievementPreview>
    </ModalBodyWrapper>
  )
}

export default React.memo(Body)

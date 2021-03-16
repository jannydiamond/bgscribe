import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { OptionTypeBase } from 'react-select'

import * as types from 'types'

import { editAchievementSet } from 'Redux/AchievementSets/sideEffects'
import { selectAchievementSetsTags } from 'Redux/AchievementSets'

import ModalBodyWrapper from 'components/__styled__/ModalBodyWrapper'
import Form from 'components/__styled__/Form'
import Fieldset from 'components/__styled__/Fieldset'
import Label from 'components/__styled__/Label'
import LabelText from 'components/__styled__/LabelText'
import Input from 'components/__styled__/Input'
import Textarea from 'components/__styled__/Textarea'
import CreatableSelect from 'components/__styled__/CreatableSelect'

type Props = {
  modal: types.Modal
  achievementSet: types.AchievementSet
}

const Body = ({ modal, achievementSet }: Props) => {
  const dispatch = useDispatch()

  const allTags = useSelector(selectAchievementSetsTags)

  const options: OptionTypeBase = [
    ...allTags.map((tag) => {
      return {
        label: tag,
        value: tag,
      }
    }),
  ]

  const [title, setTitle] = useState<string>(achievementSet.title)
  const [description, setDescription] = useState<string>(
    achievementSet.description ?? ''
  )
  const [tags, setTags] = useState<OptionTypeBase | null>(
    achievementSet.tags.map((tag) => {
      return {
        label: tag,
        value: tag,
      }
    })
  )
  const [version, setVersion] = useState<string>(achievementSet.version)
  const [authorName, setAuthorName] = useState<string>(
    achievementSet.author?.name ?? ''
  )
  const [authorEmail, setAuthorEmail] = useState<string>(
    achievementSet.author?.email ?? ''
  )

  const handleTitleChange = (event: any) => setTitle(event.target.value)
  const handleDescriptionChange = (event: any) =>
    setDescription(event.target.value)
  const handleTagsChange = (option: OptionTypeBase | null) => setTags(option)
  const handleVersionChange = (event: any) => setVersion(event.target.value)
  const handleAuthorNameChange = (event: any) =>
    setAuthorName(event.target.value)
  const handleAuthorEmailChange = (event: any) =>
    setAuthorEmail(event.target.value)

  const handleSubmit = (event: any) => {
    event.preventDefault()

    dispatch(
      editAchievementSet({
        id: achievementSet.id,
        title,
        description,
        tags: tags ? tags.map((tag: OptionTypeBase) => tag.value) : [],
        version,
        achievements: [],
        author: {
          name: authorName,
          email: authorEmail,
        },
      })
    )

    modal.hide()
  }

  return (
    <ModalBodyWrapper>
      <Form id="editAchievementSet" onSubmit={handleSubmit}>
        <Fieldset>
          <Label htmlFor="achievementSetTitle">
            <LabelText>Title</LabelText>
            <Input
              id="achievementSetTitle"
              onChange={handleTitleChange}
              value={title}
            />
          </Label>
        </Fieldset>
        <Fieldset>
          <Label htmlFor="achievementSetDescription">
            <LabelText>Description</LabelText>
            <Textarea
              id="achievementSetDescription"
              onChange={handleDescriptionChange}
              value={description}
            />
          </Label>
        </Fieldset>
        <Fieldset>
          <Label htmlFor="achievementSetTags">
            <LabelText>Tags</LabelText>
            <CreatableSelect
              options={options}
              isMulti
              onChange={handleTagsChange}
              value={tags}
            />
          </Label>
        </Fieldset>
        <Fieldset>
          <Label htmlFor="achievementSetVersion">
            <LabelText>Version</LabelText>
            <Input
              id="achievementSetVersion"
              type="number"
              onChange={handleVersionChange}
              value={version}
            />
          </Label>
        </Fieldset>
        <Fieldset>
          <Label htmlFor="achievementSetAuthorName">
            <LabelText>Author name</LabelText>
            <Input
              id="achievementSetAuthorName"
              onChange={handleAuthorNameChange}
              value={authorName}
            />
          </Label>
        </Fieldset>
        <Fieldset>
          <Label htmlFor="achievementSetAuthorEmail">
            <LabelText>Author email</LabelText>
            <Input
              id="achievementSetAuthorEmail"
              onChange={handleAuthorEmailChange}
              value={authorEmail}
            />
          </Label>
        </Fieldset>
      </Form>
    </ModalBodyWrapper>
  )
}

export default React.memo(Body)

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { OptionTypeBase } from 'react-select'

import * as types from 'types'

import { editAchievementSet } from 'Redux/AchievementSets/sideEffects'

import ModalBodyWrapper from 'components/__styled__/ModalBodyWrapper'
import Form from 'components/__styled__/Form'
import TitleInput from './TitleInput'
import DescriptionTextarea from './DescriptionTextarea'
import TagsSelect from './TagsSelect'
import VersionInput from './VersionInput'
import AuthorNameInput from './AuthorNameInput'
import AuthorEmailInput from './AuthorEmailInput'

type Props = {
  modal: types.Modal
  achievementSet: types.AchievementSet
}

const Body = ({ modal, achievementSet }: Props) => {
  const dispatch = useDispatch()

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
        ...achievementSet,
        id: achievementSet.id,
        title,
        description,
        tags: tags ? tags.map((tag: OptionTypeBase) => tag.value) : [],
        version,
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
        <TitleInput onChange={handleTitleChange} value={title} />
        <DescriptionTextarea
          onChange={handleDescriptionChange}
          value={description}
        />
        <TagsSelect onChange={handleTagsChange} value={tags} />
        <VersionInput onChange={handleVersionChange} value={version} />
        <AuthorNameInput onChange={handleAuthorNameChange} value={authorName} />
        <AuthorEmailInput
          onChange={handleAuthorEmailChange}
          value={authorEmail}
        />
      </Form>
    </ModalBodyWrapper>
  )
}

export default React.memo(Body)

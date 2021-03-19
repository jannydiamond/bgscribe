import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as types from 'types'

import { editGame } from 'Redux/Games/sideEffects'

import ModalBodyWrapper from 'components/__styled__/ModalBodyWrapper'
import Form from 'components/__styled__/Form'
import NameInput from './NameInput'
import ImageFileInput from './ImageFileInput'

type Props = {
  modal: types.Modal
  game: types.Game
}

const Body = ({ modal, game }: Props) => {
  const [name, setName] = useState<string>(game.name)
  const [image, setImage] = useState<string>(game.image)

  const dispatch = useDispatch()

  const handleNameChange = (event: any) => setName(event.target.value)
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
      editGame({
        id: game.id,
        name: name,
        image: image,
      })
    )
    modal.hide()
  }

  return (
    <ModalBodyWrapper>
      <Form id="editGame" onSubmit={handleSubmit}>
        <NameInput onChange={handleNameChange} value={name} />
        <ImageFileInput onChange={handleImageChange} />
      </Form>
    </ModalBodyWrapper>
  )
}

export default React.memo(Body)

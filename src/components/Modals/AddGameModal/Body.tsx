import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import shortid from 'shortid'

import * as types from 'types'

import { addGame } from 'Redux/Games/sideEffects'

import ModalBodyWrapper from 'components/__styled__/ModalBodyWrapper'
import Form from 'components/__styled__/Form'
import NameInput from './NameInput'
import ImageFileInput from './ImageFileInput'

type Props = {
  modal: types.Modal
}

const Body = ({ modal }: Props) => {
  const [name, setName] = useState<string>('')
  const [image, setImage] = useState<string>('')

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

    const gameId = shortid.generate()

    dispatch(
      addGame({
        id: gameId,
        name: name,
        image: image,
      })
    )

    modal.hide()
  }

  return (
    <ModalBodyWrapper>
      <Form id="addGame" onSubmit={handleSubmit}>
        <NameInput onChange={handleNameChange} value={name} />
        <ImageFileInput onChange={handleImageChange} />
      </Form>
    </ModalBodyWrapper>
  )
}

export default React.memo(Body)

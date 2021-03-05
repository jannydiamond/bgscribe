import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as types from 'types'

import { editGame } from 'Redux/Games/sideEffects'

import ModalBodyWrapper from 'components/__styled__/ModalBodyWrapper'
import Form from 'components/__styled__/Form'
import Fieldset from 'components/__styled__/Fieldset'
import Label from 'components/__styled__/Label'
import LabelText from 'components/__styled__/LabelText'
import Input from 'components/__styled__/Input'

type Props = {
  modal: types.Modal
  game: types.Game
}

const Body = ({ modal, game }: Props) => {
  const [name, setName] = useState<string>(game.name)

  const dispatch = useDispatch()

  const handleChange = (event: any) => setName(event.target.value)

  const handleSubmit = (event: any) => {
    event.preventDefault()
    dispatch(
      editGame({
        id: game.id,
        name: name,
      })
    )
    modal.hide()
  }

  return (
    <ModalBodyWrapper>
      <Form id="editGame" onSubmit={handleSubmit}>
        <Fieldset>
          <Label htmlFor="gameName">
            <LabelText>Name</LabelText>
            <Input id="gameName" value={name} onChange={handleChange} />
          </Label>
        </Fieldset>
      </Form>
    </ModalBodyWrapper>
  )
}

export default React.memo(Body)

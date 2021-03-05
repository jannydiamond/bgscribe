import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import shortid from 'shortid'

import * as types from 'types'

import { addGame } from 'Redux/Games'

import ModalBodyWrapper from 'components/__styled__/ModalBodyWrapper'
import Form from 'components/__styled__/Form'
import Fieldset from 'components/__styled__/Fieldset'
import Label from 'components/__styled__/Label'
import LabelText from 'components/__styled__/LabelText'
import Input from 'components/__styled__/Input'

type Props = {
  modal: types.Modal
}

const Body = ({ modal }: Props) => {
  const [name, setName] = useState<string>('')

  const dispatch = useDispatch()

  const handleChange = (event: any) => setName(event.target.value)

  const handleSubmit = (event: any) => {
    event.preventDefault()

    const gameId = shortid.generate()

    dispatch(
      addGame({
        id: gameId,
        name: name,
      })
    )

    modal.hide()
  }

  return (
    <ModalBodyWrapper>
      <Form id="addGame" onSubmit={handleSubmit}>
        <Fieldset>
          <Label htmlFor="gameName">
            <LabelText>Name</LabelText>
            <Input id="gameName" onChange={handleChange} />
          </Label>
        </Fieldset>
      </Form>
    </ModalBodyWrapper>
  )
}

export default React.memo(Body)

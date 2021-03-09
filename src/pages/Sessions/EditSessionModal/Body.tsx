import React, { useState } from 'react'
import MDEditor from '@uiw/react-md-editor'
import { useDispatch } from 'react-redux'
import { format } from 'date-fns'

import * as types from 'types'

import { editSession } from 'Redux/Sessions/sideEffects'

import ModalBodyWrapper from 'components/__styled__/ModalBodyWrapper'
import Form from 'components/__styled__/Form'
import Fieldset from 'components/__styled__/Fieldset'
import Label from 'components/__styled__/Label'
import LabelText from 'components/__styled__/LabelText'
import Input from 'components/__styled__/Input'

type Props = {
  modal: types.Modal
  session: types.Session
}

const Body = ({ modal, session }: Props) => {
  const [datePlayed, setDatePlayed] = useState<string>(
    format(session.datePlayed, 'yyyy-MM-dd')
  )
  const [amountOfPlayers, setAmountOfPlayers] = useState<string>(
    session.amountOfPlayers.toString()
  )
  const [note, setNote] = useState<string>(session.note)

  const dispatch = useDispatch()

  const handleDatePlayedChange = (event: any) =>
    setDatePlayed(event.target.value)
  const handleAmountOfPlayersChange = (event: any) =>
    setAmountOfPlayers(event.target.value)
  const handleNoteChange = (value: any) => setNote(value)

  const handleSubmit = (event: any) => {
    event.preventDefault()
    dispatch(
      editSession({
        id: session.id,
        datePlayed: new Date(datePlayed),
        amountOfPlayers: parseInt(amountOfPlayers),
        note: note,
      })
    )
    modal.hide()
  }

  return (
    <ModalBodyWrapper>
      <Form id="editSession" onSubmit={handleSubmit}>
        <Fieldset>
          <Label htmlFor="sessionDatePlayed">
            <LabelText>Date played</LabelText>
            <Input
              type="date"
              id="sessionDatePlayed"
              onChange={handleDatePlayedChange}
              value={datePlayed}
            />
          </Label>
        </Fieldset>
        <Fieldset>
          <Label htmlFor="sessionAmountOfPlayers">
            <LabelText>Amount of players</LabelText>
            <Input
              type="number"
              id="sessionAmountOfPlayers"
              onChange={handleAmountOfPlayersChange}
              value={amountOfPlayers}
            />
          </Label>
        </Fieldset>
        <Fieldset>
          <Label htmlFor="sessionNote">
            <LabelText>Note (with markdown support)</LabelText>
            <MDEditor
              id="sessionNote"
              value={note}
              onChange={handleNoteChange}
              hideToolbar={true}
              preview="edit"
            />
          </Label>
        </Fieldset>
      </Form>
    </ModalBodyWrapper>
  )
}

export default React.memo(Body)

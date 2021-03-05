import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { format } from 'date-fns'
import shortid from 'shortid'

import * as types from 'types'

import { addSession } from 'Redux/Sessions'
import { addSessionToGame } from 'Redux/Games'

import ModalBodyWrapper from 'components/__styled__/ModalBodyWrapper'
import Form from 'components/__styled__/Form'
import Fieldset from 'components/__styled__/Fieldset'
import Label from 'components/__styled__/Label'
import LabelText from 'components/__styled__/LabelText'
import Input from 'components/__styled__/Input'
import Textarea from 'components/__styled__/Textarea'

type Props = {
  modal: types.Modal
  gameId: string
}

// ToDo
const Body = ({ modal, gameId }: Props) => {
  const [datePlayed, setDatePlayed] = useState<string>(
    format(new Date(), 'yyyy-MM-dd')
  )
  const [amountOfPlayers, setAmountOfPlayers] = useState<string>('0')
  const [note, setNote] = useState<string>('')

  const dispatch = useDispatch()

  const handleDatePlayedChange = (event: any) =>
    setDatePlayed(event.target.value)
  const handleAmountOfPlayersChange = (event: any) =>
    setAmountOfPlayers(event.target.value)
  const handleNoteChange = (event: any) => setNote(event.target.value)

  const handleSubmit = (event: any) => {
    event.preventDefault()

    const sessionId = shortid.generate()

    dispatch(
      addSessionToGame({
        gameId: gameId,
        sessionId: sessionId,
      })
    )

    dispatch(
      addSession({
        id: sessionId,
        gameId: gameId,
        datePlayed: datePlayed !== '' ? new Date(datePlayed) : new Date(),
        amountOfPlayers: amountOfPlayers !== '' ? parseInt(amountOfPlayers) : 0,
        note: note,
      })
    )

    modal.hide()
  }

  return (
    <ModalBodyWrapper>
      <Form id="addSession" onSubmit={handleSubmit}>
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
            <LabelText>Note</LabelText>
            <Textarea id="sessionNote" onChange={handleNoteChange} />
          </Label>
        </Fieldset>
      </Form>
    </ModalBodyWrapper>
  )
}

export default React.memo(Body)

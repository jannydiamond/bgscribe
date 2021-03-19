import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { format } from 'date-fns'

import * as types from 'types'

import { editSession } from 'Redux/Sessions/sideEffects'

import ModalBodyWrapper from 'components/__styled__/ModalBodyWrapper'
import Form from 'components/__styled__/Form'
import DatePlayedInput from './DatePlayedInput'
import AmountOfPlayersInput from './AmountOfPlayersInput'
import SessionNoteInput from './SessionNoteInput'

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
        <DatePlayedInput onChange={handleDatePlayedChange} value={datePlayed} />
        <AmountOfPlayersInput
          onChange={handleAmountOfPlayersChange}
          value={amountOfPlayers}
        />

        <SessionNoteInput onChange={handleNoteChange} value={note} />
      </Form>
    </ModalBodyWrapper>
  )
}

export default React.memo(Body)

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { format } from 'date-fns'
import shortid from 'shortid'

import * as types from 'types'

import { addSession } from 'Redux/sideEffects'
import { selectSessionTemplatesById } from 'Redux/SessionTemplates'

import ModalBodyWrapper from 'components/__styled__/ModalBodyWrapper'
import Form from 'components/__styled__/Form'
import DatePlayedInput from './DatePlayedInput'
import AmountOfPlayersInput from './AmountOfPlayersInput'
import SessionNoteInput from './SessionNoteInput'
import SessionTemplateSelect from './SessionTemplateSelect'

type Props = {
  modal: types.Modal
  gameId: string
}

const Body = ({ modal, gameId }: Props) => {
  const [datePlayed, setDatePlayed] = useState<string>(
    format(new Date(), 'yyyy-MM-dd')
  )
  const [amountOfPlayers, setAmountOfPlayers] = useState<string>('0')
  const [note, setNote] = useState<string>('')

  const templatesById = useSelector(selectSessionTemplatesById)

  const dispatch = useDispatch()

  const handleDatePlayedChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setDatePlayed(event.target.value)

  const handleAmountOfPlayersChange = (event: any) =>
    setAmountOfPlayers(event.target.value)

  const handleNoteChange = (value?: string) => {
    setNote(value ?? '')
  }

  const handleSessionTemplateChange = (templateId?: string) => {
    if (templateId && templatesById[templateId]) {
      setNote(templatesById[templateId].template)
    }
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()

    const sessionId = shortid.generate()

    dispatch(
      addSession({
        gameId,
        session: {
          id: sessionId,
          gameId: gameId,
          datePlayed: datePlayed !== '' ? new Date(datePlayed) : new Date(),
          amountOfPlayers:
            amountOfPlayers !== '' ? parseInt(amountOfPlayers) : 0,
          note: note,
          created: new Date(),
        },
      })
    )

    modal.hide()
  }

  return (
    <ModalBodyWrapper>
      <Form id="addSession" onSubmit={handleSubmit}>
        <DatePlayedInput onChange={handleDatePlayedChange} value={datePlayed} />
        <AmountOfPlayersInput
          onChange={handleAmountOfPlayersChange}
          value={amountOfPlayers}
        />

        <SessionTemplateSelect onChange={handleSessionTemplateChange} />
        <SessionNoteInput onChange={handleNoteChange} value={note} />
      </Form>
    </ModalBodyWrapper>
  )
}

export default React.memo(Body)

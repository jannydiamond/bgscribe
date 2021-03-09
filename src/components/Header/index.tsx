import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { format } from 'date-fns'

import { selectGames } from 'Redux/Games'
import { selectSessions } from 'Redux/Sessions'

import Title from './__styled__/Title'
import Wrapper from './__styled__/Wrapper'

const Header = () => {
  // @ts-ignore
  const { gameId, sessionId } = useParams()

  const games = useSelector(selectGames)
  const sessions = useSelector(selectSessions)

  return (
    <Wrapper>
      <Title>
        {sessionId && sessions[sessionId]?.datePlayed
          ? `Session: ${format(sessions[sessionId].datePlayed, 'dd.MM.yyyy')}`
          : gameId && games[gameId]?.name
          ? games[gameId].name
          : `Boardgame Tracker ${process.env.REACT_APP_VERSION}`}
      </Title>
    </Wrapper>
  )
}

export default React.memo(Header)

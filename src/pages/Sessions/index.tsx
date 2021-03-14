import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { format } from 'date-fns'

import * as types from 'types'

import { RootState } from 'Redux/store'
import { selectGamesById } from 'Redux/Games'
import { selectSessionsArraySortedByDatePlayed } from 'Redux/Sessions'

import { useModal } from 'hooks/useModal'

import FloatingButton from 'components/FloatingButton'
import Icon from 'components/Icon'
import P from 'components/__styled__/P'
import Main from 'components/__styled__/Main'
import KeyValueList from 'components/__styled__/KeyValueList'

import SessionsHeader from './SessionsHeader'
import GameDetails from './GameDetails'
import AddSessionModal from './AddSessionModal'
import List from './__styled__/List'
import ListItem from './__styled__/ListItem'
import Link from './__styled__/Link'
import ContentWrapper from './__styled__/ContentWrapper'
import Title from './__styled__/Title'
import Subtitle from './__styled__/Subtitle'
import IconWrapper from './__styled__/IconWrapper'
import Headline from './__styled__/Headline'
import SessionCount from './SessionCount'
import LastPlayed from './LastPlayed'

const Sessions = () => {
  // @ts-ignore
  const { gameId } = useParams()

  const gamesById = useSelector(selectGamesById)
  const game = gamesById[gameId]

  const sessionsArray: types.Session[] = useSelector((state: RootState) =>
    selectSessionsArraySortedByDatePlayed(state, gameId)
  )

  const addSessionModal = useModal()

  if (!game) {
    return null
  }

  const renderSessions = (sessions: types.Session[]) => {
    return sessions.map((session: types.Session) => {
      return (
        <ListItem key={session.id}>
          <Link to={`/games/${gameId}/${session.id}`}>
            <ContentWrapper>
              <Title>{format(session.datePlayed, 'dd.MM.yyyy')}</Title>
              <Subtitle>{session.amountOfPlayers} Players</Subtitle>
            </ContentWrapper>
            <IconWrapper>
              <Icon icon="chevron_right" />
            </IconWrapper>
          </Link>
        </ListItem>
      )
    })
  }

  return (
    <>
      <SessionsHeader gameId={gameId} />
      <Main>
        <GameDetails>
          <KeyValueList>
            <SessionCount gameId={gameId} />
            <LastPlayed gameId={gameId} />
          </KeyValueList>
        </GameDetails>
        <Headline>Sessions</Headline>
        {sessionsArray.length > 0 ? (
          <List>{renderSessions(sessionsArray)}</List>
        ) : (
          <P>No sessions where added, yet.</P>
        )}
      </Main>
      <FloatingButton
        variant="secondary"
        onClick={() => addSessionModal.show()}
      >
        Add Session
      </FloatingButton>
      <AddSessionModal modal={addSessionModal} game={game} />
    </>
  )
}

export default React.memo(Sessions)

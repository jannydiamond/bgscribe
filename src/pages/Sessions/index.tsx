import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { format } from 'date-fns'

import * as types from 'types'

import { RootState } from 'Redux/store'
import { selectGames } from 'Redux/Games'
import { selectGamesArrayWithLatestPlayedDateSorted } from 'Redux/root'
import { selectSessionsArraySortedByDatePlayed } from 'Redux/Sessions'

import { useModal } from 'hooks/useModal'

import FloatingButton from 'components/FloatingButton'
import Icon from 'components/Icon'
import P from 'components/__styled__/P'
import KeyValueList from 'components/__styled__/KeyValueList'
import KeyValueListItem from 'components/__styled__/KeyValueListItem'
import KeyValueListKey from 'components/__styled__/KeyValueListKey'

import GameDetails from './GameDetails'
import AddSessionModal from './AddSessionModal'
import Main from './__styled__/Main'
import List from './__styled__/List'
import ListItem from './__styled__/ListItem'
import Link from './__styled__/Link'
import ContentWrapper from './__styled__/ContentWrapper'
import Title from './__styled__/Title'
import Subtitle from './__styled__/Subtitle'
import IconWrapper from './__styled__/IconWrapper'
import Headline from './__styled__/Headline'

const Sessions = () => {
  // @ts-ignore
  const { gameId } = useParams()

  const games = useSelector(selectGames)
  const gamesArrayWithLastPlayedDate: types.GameWithLastPlayedDate[] = useSelector(
    selectGamesArrayWithLatestPlayedDateSorted
  )

  const gameLastPlayed = gamesArrayWithLastPlayedDate.find(
    (game) => game.id === gameId
  )

  const sessionsArray: types.Session[] = useSelector((state: RootState) =>
    selectSessionsArraySortedByDatePlayed(state, gameId)
  )

  const addSessionModal = useModal()

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
      <Main>
        <GameDetails>
          <KeyValueList>
            <KeyValueListItem>
              <KeyValueListKey>Sessions:</KeyValueListKey>{' '}
              {games[gameId].sessions.length}
            </KeyValueListItem>
            <KeyValueListItem>
              <KeyValueListKey>Last played:</KeyValueListKey>{' '}
              {gameLastPlayed?.lastPlayed
                ? format(gameLastPlayed.lastPlayed, 'dd.MM.yyyy')
                : '-'}
            </KeyValueListItem>
            <KeyValueListItem>
              <KeyValueListKey>Date added:</KeyValueListKey>{' '}
              {format(games[gameId].created, 'dd.MM.yyyy')}
            </KeyValueListItem>
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
      <AddSessionModal modal={addSessionModal} game={games[gameId]} />
    </>
  )
}

export default React.memo(Sessions)

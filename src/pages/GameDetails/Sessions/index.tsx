import React from 'react'
import { useSelector } from 'react-redux'
import { format } from 'date-fns'

import { Session } from 'types'

import { RootState } from 'Redux/store'
import { selectSessionsArraySortedByDatePlayed } from 'Redux/Sessions'

import Headline from 'pages/GameDetails/__styled__/Headline'
import List from 'pages/GameDetails/__styled__/List'
import ListItem from 'pages/GameDetails/__styled__/ListItem'
import Link from 'pages/GameDetails/__styled__/Link'
import ContentWrapper from 'pages/GameDetails/__styled__/ContentWrapper'
import IconWrapper from 'pages/GameDetails/__styled__/IconWrapper'
import Title from 'pages/GameDetails/__styled__/Title'
import Subtitle from 'pages/GameDetails/__styled__/Subtitle'

import Icon from 'components/Icon'
import P from 'components/__styled__/P'

type Props = {
  gameId: string
}

const Sessions = (props: Props) => {
  const sessionsArray: Session[] = useSelector((state: RootState) =>
    selectSessionsArraySortedByDatePlayed(state, props.gameId)
  )

  const renderSessions = (sessions: Session[]) => {
    return sessions.map((session: Session) => {
      return (
        <ListItem key={session.id}>
          <Link to={`/games/${props.gameId}/${session.id}`}>
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
      <Headline>Sessions</Headline>
      {sessionsArray.length > 0 ? (
        <List>{renderSessions(sessionsArray)}</List>
      ) : (
        <P>No sessions have been added, yet.</P>
      )}
    </>
  )
}

export default React.memo(Sessions)

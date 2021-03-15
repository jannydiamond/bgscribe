import React from 'react'
import { useSelector } from 'react-redux'
import { format } from 'date-fns'

import { Session } from 'types'

import { RootState } from 'Redux/store'
import { selectSessionsArraySortedByDatePlayed } from 'Redux/Sessions'

import LinkTile from 'components/LinkTile'
import P from 'components/__styled__/P'
import H2 from 'components/__styled__/H2'

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
        <LinkTile
          key={session.id}
          href={`/games/${props.gameId}/${session.id}`}
          title={format(session.datePlayed, 'dd.MM.yyyy')}
          subtitle={`${session.amountOfPlayers} Players`}
        />
      )
    })
  }

  return (
    <>
      <H2>Sessions</H2>
      {sessionsArray.length > 0 ? (
        renderSessions(sessionsArray)
      ) : (
        <P>No sessions have been added, yet.</P>
      )}
    </>
  )
}

export default React.memo(Sessions)

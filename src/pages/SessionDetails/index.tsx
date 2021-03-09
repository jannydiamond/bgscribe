import React from 'react'
import MDEditor from '@uiw/react-md-editor'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { format } from 'date-fns'

import { selectSessions, selectSessionsArray } from 'Redux/Sessions'

import BackLink from 'components/BackLink'
import KeyValueList from 'components/__styled__/KeyValueList'
import KeyValueListItem from 'components/__styled__/KeyValueListItem'
import KeyValueListKey from 'components/__styled__/KeyValueListKey'

import Main from './__styled__/Main'
import SessionDetailsWrapper from './__styled__/SessionDetailsWrapper'
import Title from './__styled__/Title'
import Note from './__styled__/Note'

const SessionDetails = () => {
  // @ts-ignore
  const { gameId, sessionId } = useParams()

  const sessions = useSelector(selectSessions)
  const sessionsArray = useSelector(selectSessionsArray)
  const currentSession = sessions[sessionId]

  return (
    <>
      {sessionsArray.length > 0 ? (
        <Main>
          <BackLink to={`/${gameId}`}>Back to session overview</BackLink>
          <SessionDetailsWrapper>
            <Title>
              Session: {format(currentSession.datePlayed, 'dd.MM.yyyy')}
            </Title>
            <KeyValueList>
              <KeyValueListItem>
                <KeyValueListKey>Amount of players:</KeyValueListKey>{' '}
                {currentSession.amountOfPlayers}
              </KeyValueListItem>
              <KeyValueListItem>
                <KeyValueListKey>Date played:</KeyValueListKey>{' '}
                {format(currentSession.datePlayed, 'dd.MM.yyyy')}
              </KeyValueListItem>
              <KeyValueListItem>
                <KeyValueListKey>Date added:</KeyValueListKey>{' '}
                {format(currentSession.created, 'dd.MM.yyyy')}
              </KeyValueListItem>
            </KeyValueList>
            {currentSession.note && (
              <Note>
                <MDEditor.Markdown source={currentSession.note} />
              </Note>
            )}
          </SessionDetailsWrapper>
        </Main>
      ) : (
        <Main>
          <BackLink to={`/${gameId}`}>Back to session overview</BackLink>
          No details available.
        </Main>
      )}
    </>
  )
}

export default React.memo(SessionDetails)

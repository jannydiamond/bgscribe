import React from 'react'
import MDEditor from '@uiw/react-md-editor'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { format } from 'date-fns'

import { selectSessionsById } from 'Redux/Sessions'

import P from 'components/__styled__/P'
import Main from 'components/__styled__/Main'
import KeyValueList from 'components/__styled__/KeyValueList'
import KeyValueListItem from 'components/__styled__/KeyValueListItem'
import KeyValueListKey from 'components/__styled__/KeyValueListKey'

import Details from './Details'
import Note from './__styled__/Note'
import Headline from './__styled__/Headline'
import SessionDetailsHeader from './SessionDetailsHeader'

const SessionDetails = () => {
  // @ts-ignore
  const { sessionId } = useParams()

  const sessions = useSelector(selectSessionsById)
  const currentSession = sessions[sessionId]

  if (!currentSession) {
    return null
  }

  return (
    <>
      <SessionDetailsHeader sessionId={currentSession.id} />
      <Main>
        <Details>
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
        </Details>
        <Headline>Notes</Headline>
        {currentSession.note ? (
          <Note>
            <MDEditor.Markdown source={currentSession.note} />
          </Note>
        ) : (
          <P>There are no notes for this session.</P>
        )}
      </Main>
    </>
  )
}

export default React.memo(SessionDetails)

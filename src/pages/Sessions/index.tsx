import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { format } from 'date-fns'

import * as types from 'types'

import { RootState } from 'Redux/store'
import { selectGames } from 'Redux/Games/index'
import {
  selectSessions,
  selectSessionsArraySortedByDatePlayed,
} from 'Redux/Sessions'

import { useModal } from 'hooks/useModal'

import Card from 'components/Card'
import IconButton from 'components/IconButton'
import FloatingButton from 'components/FloatingButton'
import IconLink from 'components/IconLink'
import BackLink from 'components/BackLink'
import TileList from 'components/__styled__/TileList'
import TileListItem from 'components/__styled__/TileListItem'
import KeyValueList from 'components/__styled__/KeyValueList'
import KeyValueListItem from 'components/__styled__/KeyValueListItem'
import KeyValueListKey from 'components/__styled__/KeyValueListKey'

import AddSessionModal from './AddSessionModal'
import EditSessionModal from './EditSessionModal'
import DeleteSessionModal from './DeleteSessionModal'
import SessionDetailsWrapper from './__styled__/SessionDetailsWrapper'
import ControlsWrapper from './__styled__/ControlsWrapper'
import Content from './__styled__/Content'
import Title from './__styled__/Title'
import Main from './__styled__/Main'

const Sessions = () => {
  // @ts-ignore
  const { gameId } = useParams()

  const games = useSelector(selectGames)

  const [session, setSession] = useState<types.Session | {}>({})
  const sessions = useSelector(selectSessions)
  const sessionsArray: types.Session[] = useSelector((state: RootState) =>
    selectSessionsArraySortedByDatePlayed(state, gameId)
  )

  const addSessionModal = useModal()
  const editSessionModal = useModal()
  const deleteSessionModal = useModal()

  const handleEditSession = (id: string) => {
    setSession(sessions[id])
    editSessionModal.show()
  }

  const handleDeleteSession = (id: string) => {
    setSession(sessions[id])
    deleteSessionModal.show()
  }

  const renderSessions = (sessions: types.Session[]) => {
    return sessions.map((session: types.Session) => {
      return (
        <TileListItem key={session.id}>
          <Card>
            <Content>
              <SessionDetailsWrapper>
                <Title>
                  Session: {format(session.datePlayed, 'dd.MM.yyyy')}
                </Title>
                <KeyValueList>
                  <KeyValueListItem>
                    <KeyValueListKey>Amount of players:</KeyValueListKey>{' '}
                    {session.amountOfPlayers}
                  </KeyValueListItem>
                  <KeyValueListItem>
                    <KeyValueListKey>Date played:</KeyValueListKey>{' '}
                    {format(session.datePlayed, 'dd.MM.yyyy')}
                  </KeyValueListItem>
                  <KeyValueListItem>
                    <KeyValueListKey>Date added:</KeyValueListKey>{' '}
                    {format(session.created, 'dd.MM.yyyy')}
                  </KeyValueListItem>
                </KeyValueList>
                {session.note && (
                  <>
                    <br />
                    <IconLink to={`/${gameId}/${session.id}`} icon="visibility">
                      Show Details
                    </IconLink>
                  </>
                )}
              </SessionDetailsWrapper>
              <ControlsWrapper>
                <IconButton
                  title="Edit Session"
                  icon="create"
                  onClick={() => handleEditSession(session.id)}
                />
                <IconButton
                  title="Delete Session"
                  icon="delete"
                  variant="danger"
                  onClick={() => handleDeleteSession(session.id)}
                />
              </ControlsWrapper>
            </Content>
          </Card>
        </TileListItem>
      )
    })
  }

  return (
    <>
      {sessionsArray.length > 0 ? (
        <>
          <Main>
            <BackLink to="/">Back to game overview</BackLink>
            <TileList>{renderSessions(sessionsArray)}</TileList>
          </Main>
          <AddSessionModal modal={addSessionModal} game={games[gameId]} />
          <EditSessionModal
            modal={editSessionModal}
            session={session as types.Session}
          />
          <DeleteSessionModal
            modal={deleteSessionModal}
            session={session as types.Session}
            game={games[gameId]}
          />
        </>
      ) : (
        <Main>
          <BackLink to="/">Back to game overview</BackLink>
          <p>No sessions added.</p>
        </Main>
      )}
      <FloatingButton
        title="Add Session"
        icon="add"
        variant="secondary"
        onClick={() => addSessionModal.show()}
      />
    </>
  )
}

export default React.memo(Sessions)

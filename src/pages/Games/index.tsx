import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { format } from 'date-fns'

import * as types from 'types'

import {
  selectGames,
  selectGamesArray,
} from 'Redux/Games'

import { useModal } from 'hooks/useModal'

import AddSessionModal from 'pages/Sessions/AddSessionModal'

import Card from 'components/Card'
import IconButton from 'components/IconButton'
import FloatingButton from 'components/FloatingButton'
import IconLink from 'components/IconLink'
import TileList from 'components/__styled__/TileList'
import TileListItem from 'components/__styled__/TileListItem'
import KeyValueList from 'components/__styled__/KeyValueList'
import KeyValueListItem from 'components/__styled__/KeyValueListItem'
import KeyValueListKey from 'components/__styled__/KeyValueListKey'

import AddGameModal from './AddGameModal'
import EditGameModal from './EditGameModal'
import DeleteGameModal from './DeleteGameModal'
import GameDetailsWrapper from './__styled__/GameDetailsWrapper'
import ControlsWrapper from './__styled__/ControlsWrapper'
import Content from './__styled__/Content'
import Title from './__styled__/Title'
import Main from './__styled__/Main'
import {selectGamesArrayWithLatestPlayedDateSorted} from 'Redux/root'

const Games = () => {
  const [game, setGame] = useState<types.Game | {}>({})
  const games = useSelector(selectGames)
  const gamesArray: types.Game[] = useSelector(selectGamesArray)
  const gamesArrayWithLastPlayedDate = useSelector(
    selectGamesArrayWithLatestPlayedDateSorted
  )

  const addSessionModal = useModal()
  const addGameModal = useModal()
  const editGameModal = useModal()
  const deleteGameModal = useModal()

  const handleAddSession = (id: string) => {
    setGame(games[id])
    addSessionModal.show()
  }

  const handleEditGame = (id: string) => {
    setGame(games[id])
    editGameModal.show()
  }

  const handleDeleteGame = (id: string) => {
    setGame(games[id])
    deleteGameModal.show()
  }

  const renderGames = (games: types.GameWithLastPlayedDate[]) => {
    return games.map((game: types.GameWithLastPlayedDate) => {
      return (
        <TileListItem key={game.id}>
          <Card>
            <Content>
              <GameDetailsWrapper>
                <Title>{game.name}</Title>
                <KeyValueList>
                  <KeyValueListItem>
                    <KeyValueListKey>Total sessions:</KeyValueListKey>{' '}
                    {game.sessions.length}
                  </KeyValueListItem>
                  <KeyValueListItem>
                    <KeyValueListKey>Last Played:</KeyValueListKey>{' '}
                    {game.lastPlayed
                      ? format(game.lastPlayed, 'dd.MM.yyyy')
                      : '-'}
                  </KeyValueListItem>
                  <KeyValueListItem>
                    <KeyValueListKey>Date added:</KeyValueListKey>{' '}
                    {format(game.created, 'dd.MM.yyyy')}
                  </KeyValueListItem>
                </KeyValueList>
                <br />
                <IconLink to={`/${game.id}`} icon="visibility">
                  Show Details
                </IconLink>
              </GameDetailsWrapper>
              <ControlsWrapper>
                <IconButton
                  title="Add Session"
                  icon="add"
                  onClick={() => handleAddSession(game.id)}
                />
                <IconButton
                  title="Edit Game"
                  icon="create"
                  onClick={() => handleEditGame(game.id)}
                />
                <IconButton
                  title="Delete Game"
                  icon="delete"
                  variant="danger"
                  onClick={() => handleDeleteGame(game.id)}
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
      {gamesArray.length > 0 ? (
        <>
          <Main>
            <TileList>{renderGames(gamesArrayWithLastPlayedDate)}</TileList>
          </Main>
          <AddSessionModal modal={addSessionModal} game={game as types.Game} />
          <EditGameModal modal={editGameModal} game={game as types.Game} />
          <DeleteGameModal modal={deleteGameModal} game={game as types.Game} />
        </>
      ) : (
        <Main>
          <p>No games added.</p>
        </Main>
      )}
      <FloatingButton
        title="Add Game"
        icon="add"
        variant="secondary"
        onClick={() => addGameModal.show()}
      />
      <AddGameModal modal={addGameModal} />
    </>
  )
}

export default React.memo(Games)

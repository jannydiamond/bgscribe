import React from 'react'
import { useSelector } from 'react-redux'
import { format } from 'date-fns'

import * as types from 'types'

import { selectGamesArrayWithLatestPlayedDateSorted } from 'Redux/root'
import { selectGamesArray } from 'Redux/Games'

import { useModal } from 'hooks/useModal'

import FloatingButton from 'components/FloatingButton'
import Avatar from 'components/Avatar'
import Icon from 'components/Icon'

import AddGameModal from './AddGameModal'
import Main from './__styled__/Main'
import List from './__styled__/List'
import ListItem from './__styled__/ListItem'
import Link from './__styled__/Link'
import ContentWrapper from './__styled__/ContentWrapper'
import Title from './__styled__/Title'
import Subtitle from './__styled__/Subtitle'
import IconWrapper from './__styled__/IconWrapper'

const Games = () => {
  const gamesArray: types.Game[] = useSelector(selectGamesArray)
  const gamesArrayWithLastPlayedDate = useSelector(
    selectGamesArrayWithLatestPlayedDateSorted
  )

  const addGameModal = useModal()

  const renderGames = (games: types.GameWithLastPlayedDate[]) => {
    return games.map((game: types.GameWithLastPlayedDate) => {
      return (
        <ListItem key={game.id}>
          <Link to={`/games/${game.id}`}>
            <Avatar src="http://placekitten.com/300/300" alt={game.name} />
            <ContentWrapper>
              <Title>{game.name}</Title>
              <Subtitle>
                Last played:{' '}
                {game.lastPlayed ? format(game.lastPlayed, 'dd.MM.yyyy') : '-'}
              </Subtitle>
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
      {gamesArray.length > 0 ? (
        <>
          <Main>
            <List>{renderGames(gamesArrayWithLastPlayedDate)}</List>
          </Main>
        </>
      ) : (
        <Main>
          <p>No games added.</p>
        </Main>
      )}
      <FloatingButton variant="secondary" onClick={() => addGameModal.show()}>
        Add Game
      </FloatingButton>
      <AddGameModal modal={addGameModal} />
    </>
  )
}

export default React.memo(Games)

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
import P from 'components/__styled__/P'
import Main from 'components/__styled__/Main'

import AddGameModal from './AddGameModal'
import GamesHeader from './GamesHeader'
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
            <Avatar src={game.image ? game.image : ''} alt={game.name} />
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
      <GamesHeader />
      <Main>
        {gamesArray.length > 0 ? (
          <List>{renderGames(gamesArrayWithLastPlayedDate)}</List>
        ) : (
          <P>No games added.</P>
        )}
      </Main>

      <FloatingButton variant="secondary" onClick={() => addGameModal.show()}>
        Add Game
      </FloatingButton>
      <AddGameModal modal={addGameModal} />
    </>
  )
}

export default React.memo(Games)

import React from 'react'
import { useSelector } from 'react-redux'
import { format } from 'date-fns'

import { GameWithLastPlayedDate } from 'types'

import { selectGamesArrayWithLatestPlayedDateSorted } from 'Redux/root'
import { selectGamesArray } from 'Redux/Games'

import LinkTile from 'components/LinkTile'
import P from 'components/__styled__/P'
import List from './__styled__/List'
import ListItem from './__styled__/ListItem'

const GameList = () => {
  const gamesArray = useSelector(selectGamesArray)
  const gamesArrayWithLastPlayedDate = useSelector(
    selectGamesArrayWithLatestPlayedDateSorted
  )

  return (
    <>
      {gamesArray.length > 0 ? (
        <List>
          {gamesArrayWithLastPlayedDate.map((game: GameWithLastPlayedDate) => (
            <ListItem key={game.id}>
              <LinkTile
                href={`/games/${game.id}`}
                imageSrc={game.image ? game.image : ''}
                title={game.name}
                subtitle={`Last played: ${
                  game.lastPlayed ? format(game.lastPlayed, 'dd.MM.yyyy') : '-'
                }`}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <P>No games have been added, yet.</P>
      )}
    </>
  )
}

export default React.memo(GameList)

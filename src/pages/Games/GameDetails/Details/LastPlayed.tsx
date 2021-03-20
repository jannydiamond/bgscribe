import React from 'react'
import { useSelector } from 'react-redux'
import { format } from 'date-fns'

import { GameWithLastPlayedDate } from 'types'

import { selectGamesArrayWithLatestPlayedDateSorted } from 'Redux/root'

import KeyValueListItem from 'components/__styled__/KeyValueListItem'
import KeyValueListKey from 'components/__styled__/KeyValueListKey'

type Props = {
  gameId: string
}

const LastPlayed = (props: Props) => {
  const gamesArrayWithLastPlayedDate: GameWithLastPlayedDate[] = useSelector(
    selectGamesArrayWithLatestPlayedDateSorted
  )

  const gameWithLastPlayedDate = gamesArrayWithLastPlayedDate.find(
    (game) => game.id === props.gameId
  )

  return (
    <KeyValueListItem>
      <KeyValueListKey>Last played:</KeyValueListKey>{' '}
      {gameWithLastPlayedDate?.lastPlayed
        ? format(gameWithLastPlayedDate.lastPlayed, 'dd.MM.yyyy')
        : '-'}
    </KeyValueListItem>
  )
}

export default React.memo(LastPlayed)

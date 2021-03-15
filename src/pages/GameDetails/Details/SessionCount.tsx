import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'Redux/store'
import { selectGameById } from 'Redux/Games'

import KeyValueListItem from 'components/__styled__/KeyValueListItem'
import KeyValueListKey from 'components/__styled__/KeyValueListKey'

type Props = {
  gameId: string
}

const SessionCount = (props: Props) => {
  const game = useSelector((state: RootState) =>
    selectGameById(state, { gameId: props.gameId })
  )

  return (
    <KeyValueListItem>
      <KeyValueListKey>Sessions:</KeyValueListKey> {game.sessions.length}
    </KeyValueListItem>
  )
}

export default React.memo(SessionCount)

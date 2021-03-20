import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'Redux/store'
import { selectSessionById } from 'Redux/Sessions'

import KeyValueListItem from 'components/__styled__/KeyValueListItem'
import KeyValueListKey from 'components/__styled__/KeyValueListKey'

type Props = {
  sessionId: string
}

const DatePlayed = (props: Props) => {
  const session = useSelector((state: RootState) =>
    selectSessionById(state, { sessionId: props.sessionId })
  )

  return (
    <KeyValueListItem>
      <KeyValueListKey>Amount of players:</KeyValueListKey>{' '}
      {session.amountOfPlayers}
    </KeyValueListItem>
  )
}

export default React.memo(DatePlayed)

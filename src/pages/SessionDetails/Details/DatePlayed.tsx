import React from 'react'
import { useSelector } from 'react-redux'
import { format } from 'date-fns'

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
      <KeyValueListKey>Date played:</KeyValueListKey>{' '}
      {format(session.datePlayed, 'dd.MM.yyyy')}
    </KeyValueListItem>
  )
}

export default React.memo(DatePlayed)

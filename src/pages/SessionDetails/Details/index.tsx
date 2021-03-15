import React from 'react'

import KeyValueList from 'components/__styled__/KeyValueList'

import Wrapper from './__styled__/Wrapper'
import DatePlayed from './DatePlayed'
import DateAdded from './DateAdded'
import AmountOfPlayers from './AmountOfPlayers'

type Props = {
  sessionId: string
}

const Details = (props: Props) => {
  return (
    <Wrapper>
      <KeyValueList>
        <AmountOfPlayers sessionId={props.sessionId} />
        <DatePlayed sessionId={props.sessionId} />
        <DateAdded sessionId={props.sessionId} />
      </KeyValueList>
    </Wrapper>
  )
}

export default React.memo(Details)

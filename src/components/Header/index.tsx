import React from 'react'
import { useParams } from 'react-router-dom'

import Title from './__styled__/Title'
import Wrapper from './__styled__/Wrapper'

const Header = () => {
  // @ts-ignore
  const { gameId } = useParams()

  return (
    <Wrapper>
      <Title>
        {gameId ? gameId : `Boardgame Tracker ${process.env.REACT_APP_VERSION}`}
      </Title>
    </Wrapper>
  )
}

export default React.memo(Header)

import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectGames } from 'Redux/Games'

import Title from './__styled__/Title'
import Wrapper from './__styled__/Wrapper'

const Header = () => {
  // @ts-ignore
  const { gameId } = useParams()

  const games = useSelector(selectGames)

  return (
    <Wrapper>
      <Title>
        {gameId && games[gameId]?.name
          ? games[gameId].name
          : `Boardgame Tracker ${process.env.REACT_APP_VERSION}`}
      </Title>
    </Wrapper>
  )
}

export default React.memo(Header)

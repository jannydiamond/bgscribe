import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { RootState } from 'Redux/store'
import { selectGameById } from 'Redux/Games'

import { useTabbar } from 'hooks/useTabbar'

import Main from 'components/__styled__/Main'

import Header from './Header'
import Details from './Details'
import Sessions from './Sessions'
import GameAchievements from './GameAchievements'

const GameDetails = () => {
  // @ts-ignore
  const { gameId } = useParams()

  const game = useSelector((state: RootState) =>
    selectGameById(state, { gameId })
  )

  const gameDetailsTabbar = useTabbar()

  if (!game) {
    return null
  }

  return (
    <>
      <Header gameId={gameId} />
      <Main>
        <Details gameId={gameId} />
        <gameDetailsTabbar.RenderTabbar
          tabContents={[
            {
              title: 'Sessions',
              jsx: <Sessions gameId={gameId} />,
            },
            {
              title: 'Achievements',
              jsx: <GameAchievements gameId={gameId} />,
            },
          ]}
        />
      </Main>
    </>
  )
}

export default React.memo(GameDetails)

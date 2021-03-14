import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { selectGamesById } from 'Redux/Games'

import { useModal } from 'hooks/useModal'

import FloatingButton from 'components/FloatingButton'
import Main from 'components/__styled__/Main'

import Header from './Header'
import Details from './Details'
import Sessions from './Sessions'
import AddSessionModal from './AddSessionModal'

const GameDetails = () => {
  // @ts-ignore
  const { gameId } = useParams()

  const gamesById = useSelector(selectGamesById)
  const game = gamesById[gameId]

  const addSessionModal = useModal()

  if (!game) {
    return null
  }

  return (
    <>
      <Header gameId={gameId} />
      <Main>
        <Details gameId={gameId} />
        <Sessions gameId={gameId} />
      </Main>
      <FloatingButton
        variant="secondary"
        onClick={() => addSessionModal.show()}
      >
        Add Session
      </FloatingButton>
      <AddSessionModal modal={addSessionModal} game={game} />
    </>
  )
}

export default React.memo(GameDetails)

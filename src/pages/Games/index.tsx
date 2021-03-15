import React from 'react'

import { useModal } from 'hooks/useModal'

import AddGameModal from 'components/Modals/AddGameModal'
import FloatingButton from 'components/FloatingButton'
import Main from 'components/__styled__/Main'

import Header from './Header'
import GameList from './GameList'

const Games = () => {
  const addGameModal = useModal()

  return (
    <>
      <Header />
      <Main>
        <GameList />
      </Main>

      <FloatingButton variant="secondary" onClick={() => addGameModal.show()}>
        Add Game
      </FloatingButton>
      <AddGameModal modal={addGameModal} />
    </>
  )
}

export default React.memo(Games)

import React from 'react'

import { useModal } from 'hooks/useModal'

import AddGameModal from 'pages/Games/AddGameModal'
import FloatingButton from 'components/FloatingButton'
import Main from 'components/__styled__/Main'

import Header from './Header'
import GameList from './GameList'
import { useSelector } from 'react-redux'
import { selectContentIsLoading } from 'Redux/ContentLoading'

const Games = () => {
  const addGameModal = useModal()
  const contentIsLoading = useSelector(selectContentIsLoading)

  if (contentIsLoading) {
    return null
  }

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

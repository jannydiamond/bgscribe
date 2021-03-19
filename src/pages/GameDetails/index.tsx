import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { RootState } from 'Redux/store'
import { selectGameById } from 'Redux/Games'

import { useModal } from 'hooks/useModal'
import { useTabbar } from 'hooks/useTabbar'

import AddSessionModal from 'components/Modals/AddSessionModal'
import FloatingButton from 'components/FloatingButton'
import Main from 'components/__styled__/Main'

import Header from './Header'
import Details from './Details'
import Sessions from './Sessions'
import Tabpanel from 'components/Tabbar/Tabpanel'

const GameDetails = () => {
  // @ts-ignore
  const { gameId } = useParams()

  const game = useSelector((state: RootState) =>
    selectGameById(state, { gameId })
  )

  const addSessionModal = useModal()
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
          tabTitles={['Sessions', 'Achievements']}
        >
          <Tabpanel
            tabValue={0}
            selectedValue={gameDetailsTabbar.selectedTabValue}
          >
            <Sessions gameId={gameId} />
          </Tabpanel>
          <Tabpanel
            tabValue={1}
            selectedValue={gameDetailsTabbar.selectedTabValue}
          >
            Achievements
          </Tabpanel>
        </gameDetailsTabbar.RenderTabbar>
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

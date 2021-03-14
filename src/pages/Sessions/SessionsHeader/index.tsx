import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'Redux/store'
import { selectGameById } from 'Redux/Games'

import Header from 'components/__styled__/Header'
import BackLink from 'components/Header/BackLink'
import Menu from 'components/Header/Menu'
import Title from 'components/Header/__styled__/Title'

import GameMenu from './GameMenu'

type Props = {
  gameId: string
}

const SessionsHeader = (props: Props) => {
  const game = useSelector((state: RootState) =>
    selectGameById(state, { gameId: props.gameId })
  )

  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

  return (
    <Header>
      <BackLink to="/games">Back to games overview</BackLink>
      <Title>{game.name ?? ''}</Title>
      <Menu
        label="Games menu"
        isOpen={menuIsOpen}
        setMenuIsOpen={setMenuIsOpen}
      >
        <GameMenu id={game.id} closeFlyout={() => setMenuIsOpen(false)} />
      </Menu>
    </Header>
  )
}

export default React.memo(SessionsHeader)

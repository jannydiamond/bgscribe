import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'Redux/store'
import { selectGameById } from 'Redux/Games'

import { Header as HeaderInner } from 'components/__styled__/Header'
import BackLink from 'components/Header/BackLink'
import Menu from 'components/Header/Menu'
import Title from 'components/Header/__styled__/Title'

import MenuContent from './MenuContent'

type Props = {
  gameId: string
}

const Header = (props: Props) => {
  const game = useSelector((state: RootState) =>
    selectGameById(state, { gameId: props.gameId })
  )

  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

  return (
    <HeaderInner>
      <BackLink to="/games">Back to games overview</BackLink>
      <Title>{game.name ?? ''}</Title>
      <Menu
        label="Games menu"
        isOpen={menuIsOpen}
        setMenuIsOpen={setMenuIsOpen}
      >
        <MenuContent id={game.id} closeFlyout={() => setMenuIsOpen(false)} />
      </Menu>
    </HeaderInner>
  )
}

export default React.memo(Header)

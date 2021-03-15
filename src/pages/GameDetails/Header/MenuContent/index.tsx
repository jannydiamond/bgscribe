import React from 'react'

import MenuList from 'components/Header/Menu/__styled__/MenuList'

import EditGame from './EditGame'
import DeleteGame from './DeleteGame'

type Props = {
  gameId: string
  closeFlyout: () => void
}

const MenuContent = ({ gameId, closeFlyout }: Props) => {
  return (
    <MenuList>
      <EditGame gameId={gameId} closeFlyout={closeFlyout} />
      <DeleteGame gameId={gameId} closeFlyout={closeFlyout} />
    </MenuList>
  )
}

export default React.memo(MenuContent)

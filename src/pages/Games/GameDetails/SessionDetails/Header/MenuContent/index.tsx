import React from 'react'

import MenuList from 'components/Header/Menu/__styled__/MenuList'

import EditSession from './EditSession'
import DeleteSession from './DeleteSession'

type Props = {
  sessionId: string
  gameId: string
  closeFlyout: () => void
}

const MenuContent = ({ sessionId, gameId, closeFlyout }: Props) => {
  return (
    <MenuList>
      <EditSession sessionId={sessionId} closeFlyout={closeFlyout} />
      <DeleteSession
        sessionId={sessionId}
        gameId={gameId}
        closeFlyout={closeFlyout}
      />
    </MenuList>
  )
}

export default React.memo(MenuContent)

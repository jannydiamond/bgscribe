import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { format } from 'date-fns'

import { RootState } from 'Redux/store'
import { selectSessionById } from 'Redux/Sessions'

import HeaderInner from 'components/__styled__/Header'
import BackLink from 'components/Header/BackLink'
import Menu from 'components/Header/Menu'
import Title from 'components/Header/__styled__/Title'

import SessionMenu from './MenuContent'

type Props = {
  sessionId: string
}

const Header = (props: Props) => {
  const session = useSelector((state: RootState) =>
    selectSessionById(state, { sessionId: props.sessionId })
  )

  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

  return (
    <HeaderInner>
      <BackLink to={`/games/${session.gameId}`}>
        Back to sessions overview
      </BackLink>
      <Title>{format(session.datePlayed, 'dd.MM.yyyy') ?? ''}</Title>
      <Menu
        label="Session Menu"
        isOpen={menuIsOpen}
        setMenuIsOpen={setMenuIsOpen}
      >
        <SessionMenu
          sessionId={session.id}
          gameId={session.gameId}
          closeFlyout={() => setMenuIsOpen(false)}
        />
      </Menu>
    </HeaderInner>
  )
}

export default React.memo(Header)

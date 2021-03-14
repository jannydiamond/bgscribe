import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { format } from 'date-fns'

import { RootState } from 'Redux/store'
import { selectSessionById } from 'Redux/Sessions'

import Header from 'components/__styled__/Header'
import BackLink from 'components/Header/BackLink'
import Menu from 'components/Header/Menu'
import Title from 'components/Header/__styled__/Title'

import SessionMenu from './SessionMenu'

type Props = {
  sessionId: string
}

const SessionDetailsHeader = (props: Props) => {
  const session = useSelector((state: RootState) =>
    selectSessionById(state, { sessionId: props.sessionId })
  )

  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

  return (
    <Header>
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
          id={session.id}
          gameId={session.gameId}
          closeFlyout={() => setMenuIsOpen(false)}
        />
      </Menu>
    </Header>
  )
}

export default React.memo(SessionDetailsHeader)

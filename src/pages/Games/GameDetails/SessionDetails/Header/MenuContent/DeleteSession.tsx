import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'Redux/store'
import { selectGameById } from 'Redux/Games'
import { selectSessionById } from 'Redux/Sessions'

import { useModal } from 'hooks/useModal'

import DeleteSessionModal from 'components/Modals/DeleteSessionModal'
import Icon from 'components/Icon'

import MenuListItem from 'components/Header/Menu/__styled__/MenuListItem'
import MenuListButton from 'components/Header/Menu/__styled__/MenuListButton'

type Props = {
  sessionId: string
  gameId: string
  closeFlyout: () => void
}

const DeleteSession = (props: Props) => {
  const game = useSelector((state: RootState) =>
    selectGameById(state, { gameId: props.gameId })
  )

  const session = useSelector((state: RootState) =>
    selectSessionById(state, { sessionId: props.sessionId })
  )

  const deleteSessionModal = useModal()

  const handleDeleteSession = () => {
    props.closeFlyout()
    deleteSessionModal.show()
  }

  return (
    <MenuListItem>
      <MenuListButton onClick={handleDeleteSession} delete>
        <Icon icon="delete" />
        Delete Session
      </MenuListButton>
      <DeleteSessionModal
        modal={deleteSessionModal}
        session={session}
        game={game}
      />
    </MenuListItem>
  )
}

export default React.memo(DeleteSession)

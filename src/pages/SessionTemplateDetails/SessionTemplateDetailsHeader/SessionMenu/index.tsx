import React from 'react'
import { useSelector } from 'react-redux'

import { selectGamesById } from 'Redux/Games'
import { selectSessionsById } from 'Redux/Sessions'

import { useModal } from 'hooks/useModal'

import EditSessionModal from 'pages/GameDetails/EditSessionModal'
import DeleteSessionModal from 'pages/GameDetails/DeleteSessionModal'

import Icon from 'components/Icon'
import MenuList from 'components/Header/Menu/__styled__/MenuList'
import MenuListItem from 'components/Header/Menu/__styled__/MenuListItem'
import MenuListButton from 'components/Header/Menu/__styled__/MenuListButton'

type Props = {
  id: string
  gameId: string
  closeFlyout: () => void
}

const SessionMenu = ({ id, gameId, closeFlyout }: Props) => {
  const games = useSelector(selectGamesById)
  const sessions = useSelector(selectSessionsById)

  const editSessionModal = useModal()
  const deleteSessionModal = useModal()

  const handleEditSession = () => {
    closeFlyout()
    editSessionModal.show()
  }

  const handleDeleteSession = () => {
    closeFlyout()
    deleteSessionModal.show()
  }

  return (
    <MenuList>
      <MenuListItem>
        <MenuListButton onClick={handleEditSession}>
          <Icon icon="edit" />
          Edit Session
        </MenuListButton>
        <EditSessionModal modal={editSessionModal} session={sessions[id]} />
      </MenuListItem>
      <MenuListItem>
        <MenuListButton onClick={handleDeleteSession} delete>
          <Icon icon="delete" />
          Delete Session
        </MenuListButton>
        <DeleteSessionModal
          modal={deleteSessionModal}
          session={sessions[id]}
          game={games[gameId]}
        />
      </MenuListItem>
    </MenuList>
  )
}

export default React.memo(SessionMenu)

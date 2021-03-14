import React from 'react'
import { useSelector } from 'react-redux'

import { selectGamesById } from 'Redux/Games'

import { useModal } from 'hooks/useModal'

import EditGameModal from 'pages/Games/EditGameModal'
import DeleteGameModal from 'pages/Games/DeleteGameModal'

import Icon from 'components/Icon'
import MenuList from 'components/Header/Menu/__styled__/MenuList'
import MenuListItem from 'components/Header/Menu/__styled__/MenuListItem'
import MenuListButton from 'components/Header/Menu/__styled__/MenuListButton'

type Props = {
  id: string
  closeFlyout: () => void
}

const GameMenu = ({ id, closeFlyout }: Props) => {
  const games = useSelector(selectGamesById)

  const editGameModal = useModal()
  const deleteGameModal = useModal()

  const handleEditGame = () => {
    closeFlyout()
    editGameModal.show()
  }

  const handleDeleteGame = () => {
    closeFlyout()
    deleteGameModal.show()
  }

  return (
    <MenuList>
      <MenuListItem>
        <MenuListButton onClick={handleEditGame}>
          <Icon icon="edit" />
          Edit Game
        </MenuListButton>
        <EditGameModal modal={editGameModal} game={games[id]} />
      </MenuListItem>
      <MenuListItem>
        <MenuListButton onClick={handleDeleteGame} delete>
          <Icon icon="delete" />
          Delete Game
        </MenuListButton>
        <DeleteGameModal modal={deleteGameModal} game={games[id]} />
      </MenuListItem>
    </MenuList>
  )
}

export default React.memo(GameMenu)

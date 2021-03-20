import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'Redux/store'
import { selectGameById } from 'Redux/Games'

import { useModal } from 'hooks/useModal'

import DeleteGameModal from 'components/Modals/DeleteGameModal'
import Icon from 'components/Icon'

import MenuListItem from 'components/Header/Menu/__styled__/MenuListItem'
import MenuListButton from 'components/Header/Menu/__styled__/MenuListButton'

type Props = {
  gameId: string
  closeFlyout: () => void
}

const DeleteGame = (props: Props) => {
  const game = useSelector((state: RootState) =>
    selectGameById(state, { gameId: props.gameId })
  )

  const deleteGameModal = useModal()

  const handleDeleteGame = () => {
    props.closeFlyout()
    deleteGameModal.show()
  }

  return (
    <MenuListItem>
      <MenuListButton onClick={handleDeleteGame} delete>
        <Icon icon="delete" />
        Delete Game
      </MenuListButton>
      <DeleteGameModal modal={deleteGameModal} game={game} />
    </MenuListItem>
  )
}

export default React.memo(DeleteGame)

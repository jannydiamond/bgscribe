import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'Redux/store'
import { selectGameById } from 'Redux/Games'

import { useModal } from 'hooks/useModal'

import EditGameModal from 'components/Modals/EditGameModal'
import Icon from 'components/Icon'

import MenuListItem from 'components/Header/Menu/__styled__/MenuListItem'
import MenuListButton from 'components/Header/Menu/__styled__/MenuListButton'

type Props = {
  gameId: string
  closeFlyout: () => void
}

const EditGame = (props: Props) => {
  const game = useSelector((state: RootState) =>
    selectGameById(state, { gameId: props.gameId })
  )

  const editGameModal = useModal()

  const handleEditGame = () => {
    props.closeFlyout()
    editGameModal.show()
  }

  return (
    <MenuListItem>
      <MenuListButton onClick={handleEditGame}>
        <Icon icon="edit" />
        Edit Game
      </MenuListButton>
      <EditGameModal modal={editGameModal} game={game} />
    </MenuListItem>
  )
}

export default React.memo(EditGame)

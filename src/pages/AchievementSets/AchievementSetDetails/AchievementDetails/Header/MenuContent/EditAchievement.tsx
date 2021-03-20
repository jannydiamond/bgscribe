import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'Redux/store'
import { selectAchievementById } from 'Redux/Achievements'

import { useModal } from 'hooks/useModal'

import EditAchievementModal from 'components/Modals/EditAchievementModal'
import Icon from 'components/Icon'

import MenuListItem from 'components/Header/Menu/__styled__/MenuListItem'
import MenuListButton from 'components/Header/Menu/__styled__/MenuListButton'

type Props = {
  achievementId: string
  closeFlyout: () => void
}

const EditAchievement = (props: Props) => {
  const achievement = useSelector((state: RootState) =>
    selectAchievementById(state, {
      achievementId: props.achievementId,
    })
  )

  const editAchievementModal = useModal()

  const handleEditAchievement = () => {
    props.closeFlyout()
    editAchievementModal.show()
  }

  return (
    <MenuListItem>
      <MenuListButton onClick={handleEditAchievement}>
        <Icon icon="edit" />
        Edit Achievement
      </MenuListButton>
      <EditAchievementModal
        modal={editAchievementModal}
        achievement={achievement}
      />
    </MenuListItem>
  )
}

export default React.memo(EditAchievement)

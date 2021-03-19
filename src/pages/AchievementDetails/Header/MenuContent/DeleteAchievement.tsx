import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'Redux/store'
import { selectAchievementById } from 'Redux/Achievements'
import { selectAchievementSetById } from 'Redux/AchievementSets'

import { useModal } from 'hooks/useModal'

import DeleteAchievementModal from 'components/Modals/DeleteAchievementModal'
import Icon from 'components/Icon'

import MenuListItem from 'components/Header/Menu/__styled__/MenuListItem'
import MenuListButton from 'components/Header/Menu/__styled__/MenuListButton'

type Props = {
  achievementId: string
  achievementSetId: string
  closeFlyout: () => void
}

const DeleteAchievement = (props: Props) => {
  const achievement = useSelector((state: RootState) =>
    selectAchievementById(state, {
      achievementId: props.achievementId,
    })
  )

  const achievementSet = useSelector((state: RootState) =>
    selectAchievementSetById(state, {
      achievementSetId: props.achievementSetId,
    })
  )

  const deleteAchievementModal = useModal()

  const handleDeleteAchievement = () => {
    props.closeFlyout()
    deleteAchievementModal.show()
  }

  return (
    <MenuListItem>
      <MenuListButton onClick={handleDeleteAchievement} delete>
        <Icon icon="delete" />
        Delete Achievement
      </MenuListButton>
      <DeleteAchievementModal
        modal={deleteAchievementModal}
        achievement={achievement}
        achievementSet={achievementSet}
      />
    </MenuListItem>
  )
}

export default React.memo(DeleteAchievement)

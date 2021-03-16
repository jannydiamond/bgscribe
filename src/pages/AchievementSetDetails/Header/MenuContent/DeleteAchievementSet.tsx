import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'Redux/store'
import { selectAchievementSetById } from 'Redux/AchievementSets'

import { useModal } from 'hooks/useModal'

import DeleteAchievementSetModal from 'components/Modals/DeleteAchievementSetModal'
import Icon from 'components/Icon'

import MenuListItem from 'components/Header/Menu/__styled__/MenuListItem'
import MenuListButton from 'components/Header/Menu/__styled__/MenuListButton'

type Props = {
  achievementSetId: string
  closeFlyout: () => void
}

const DeleteAchievementSet = (props: Props) => {
  const achievementSet = useSelector((state: RootState) =>
    selectAchievementSetById(state, {
      achievementSetId: props.achievementSetId,
    })
  )

  const deleteAchievementSetModal = useModal()

  const handleDeleteAchievementSet = () => {
    props.closeFlyout()
    deleteAchievementSetModal.show()
  }

  return (
    <MenuListItem>
      <MenuListButton onClick={handleDeleteAchievementSet} delete>
        <Icon icon="delete" />
        Delete Achievement Set
      </MenuListButton>
      <DeleteAchievementSetModal
        modal={deleteAchievementSetModal}
        achievementSet={achievementSet}
      />
    </MenuListItem>
  )
}

export default React.memo(DeleteAchievementSet)

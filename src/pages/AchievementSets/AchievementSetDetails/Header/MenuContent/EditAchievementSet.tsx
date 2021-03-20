import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'Redux/store'
import { selectAchievementSetById } from 'Redux/AchievementSets'

import { useModal } from 'hooks/useModal'

import EditAchievementSetModal from 'pages/AchievementSets/AchievementSetDetails/Header/MenuContent/EditAchievementSetModal'
import Icon from 'components/Icon'

import MenuListItem from 'components/Header/Menu/__styled__/MenuListItem'
import MenuListButton from 'components/Header/Menu/__styled__/MenuListButton'

type Props = {
  achievementSetId: string
  closeFlyout: () => void
}

const EditAchievementSet = (props: Props) => {
  const achievementSet = useSelector((state: RootState) =>
    selectAchievementSetById(state, {
      achievementSetId: props.achievementSetId,
    })
  )

  const editAchievementSetModal = useModal()

  const handleEditAchievementSet = () => {
    props.closeFlyout()
    editAchievementSetModal.show()
  }

  return (
    <MenuListItem>
      <MenuListButton onClick={handleEditAchievementSet}>
        <Icon icon="edit" />
        Edit Achievement Set
      </MenuListButton>
      <EditAchievementSetModal
        modal={editAchievementSetModal}
        achievementSet={achievementSet}
      />
    </MenuListItem>
  )
}

export default React.memo(EditAchievementSet)

import MenuListButton from 'components/Header/Menu/__styled__/MenuListButton'
import MenuListItem from 'components/Header/Menu/__styled__/MenuListItem'
import Icon from 'components/Icon'
import React from 'react'
import { useDispatch } from 'react-redux'
import { exportAchievementSet } from 'Redux/AchievementSets/sideEffects'

type Props = {
  achievementSetId: string
  closeFlyout: () => void
}

const ExportAchievementSet = (props: Props) => {
  const dispatch = useDispatch()

  const handleEditAchievementSet = () => {
    props.closeFlyout()
    dispatch(exportAchievementSet(props.achievementSetId))
  }

  return (
    <MenuListItem>
      <MenuListButton onClick={handleEditAchievementSet}>
        <Icon icon="file_download" />
        Export Achievement Set
      </MenuListButton>
    </MenuListItem>
  )
}

export default React.memo(ExportAchievementSet)

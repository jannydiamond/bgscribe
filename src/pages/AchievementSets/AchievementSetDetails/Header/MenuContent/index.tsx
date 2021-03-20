import React from 'react'

import MenuList from 'components/Header/Menu/__styled__/MenuList'

import EditAchievementSet from './EditAchievementSet'
import DeleteAchievementSet from './DeleteAchievementSet'

type Props = {
  achievementSetId: string
  closeFlyout: () => void
}

const MenuContent = ({ achievementSetId, closeFlyout }: Props) => {
  return (
    <MenuList>
      <EditAchievementSet
        achievementSetId={achievementSetId}
        closeFlyout={closeFlyout}
      />
      <DeleteAchievementSet
        achievementSetId={achievementSetId}
        closeFlyout={closeFlyout}
      />
    </MenuList>
  )
}

export default React.memo(MenuContent)

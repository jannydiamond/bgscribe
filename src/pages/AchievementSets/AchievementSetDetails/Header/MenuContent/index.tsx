import React from 'react'

import MenuList from 'components/Header/Menu/__styled__/MenuList'

import EditAchievementSet from './EditAchievementSet'
import DeleteAchievementSet from './DeleteAchievementSet'
import ExportAchievementSet from './ExportAchievementSet'

type Props = {
  achievementSetId: string
  closeFlyout: () => void
}

const MenuContent = ({ achievementSetId, closeFlyout }: Props) => {
  return (
    <MenuList>
      <ExportAchievementSet
        achievementSetId={achievementSetId}
        closeFlyout={closeFlyout}
      />
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

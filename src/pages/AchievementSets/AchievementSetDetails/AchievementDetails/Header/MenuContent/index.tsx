import React from 'react'

import MenuList from 'components/Header/Menu/__styled__/MenuList'

import EditAchievement from './EditAchievement'
import DeleteAchievement from './DeleteAchievement'

type Props = {
  achievementId: string
  achievementSetId: string
  closeFlyout: () => void
}

const MenuContent = ({
  achievementId,
  achievementSetId,
  closeFlyout,
}: Props) => {
  return (
    <MenuList>
      <EditAchievement
        achievementId={achievementId}
        closeFlyout={closeFlyout}
      />
      <DeleteAchievement
        achievementId={achievementId}
        achievementSetId={achievementSetId}
        closeFlyout={closeFlyout}
      />
    </MenuList>
  )
}

export default React.memo(MenuContent)

import AchievementUnlockTile from 'components/AchievementUnlockTile'
import {useModal} from 'hooks/useModal'
import ListItem from 'pages/Games/__styled__/ListItem'
import React from 'react'
import {Achievement, GameAchievement as GameAchievementType} from 'types'
import UnlockAchievementModal from './UnlockAchievementModal'

type Props = {
  achievement: Achievement & GameAchievementType
}

const GameAchievement = (props: Props) => {
  const { achievement } = props
  const unlockAchievementModal = useModal()

  const handleUnlock = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    unlockAchievementModal.show()
  }

  return (
    <>
      <ListItem>
        <AchievementUnlockTile
          imageSrc={achievement.image ? achievement.image : ''}
          title={achievement.title}
          subtitle={achievement.description}
          level={achievement.level}
          onClick={handleUnlock}
          unlocked={achievement.achieved}
        />
      </ListItem>
      <UnlockAchievementModal
        modal={unlockAchievementModal}
        achievement={achievement}
      />
    </>
  )
}

export default React.memo(GameAchievement)

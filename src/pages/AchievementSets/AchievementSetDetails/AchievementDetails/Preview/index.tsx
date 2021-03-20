import AchievementAvatar from 'components/AchievementAvatar'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectAchievementById } from 'Redux/Achievements'
import { RootState } from 'Redux/store'
import Wrapper from './__styled__/Wrapper'

type Props = {
  achievementId: string
}

const Preview = (props: Props) => {
  const achievement = useSelector((state: RootState) =>
    selectAchievementById(state, {
      achievementId: props.achievementId,
    })
  )
  
  return (
    <Wrapper>
      <AchievementAvatar src={achievement.image ?? ''} alt="Preview" level={achievement.level} />
    </Wrapper>
    
  )
}

export default React.memo(Preview)

import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { RootState } from 'Redux/store'
import { selectAchievementById } from 'Redux/Achievements'

import Main from 'components/__styled__/Main'
import Header from './Header'

const AchievementDetails = () => {
  // @ts-ignore
  const { achievementId } = useParams()

  const achievement = useSelector((state: RootState) =>
    selectAchievementById(state, { achievementId })
  )

  if (!achievement) {
    return null
  }

  return (
    <>
      <Header achievementId={achievement.id} />
      <Main>Achievement</Main>
    </>
  )
}

export default React.memo(AchievementDetails)

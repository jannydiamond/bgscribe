import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { RootState } from 'Redux/store'
import { selectAchievementSetById } from 'Redux/AchievementSets'

import { useModal } from 'hooks/useModal'

import FloatingButton from 'components/FloatingButton'
import Main from 'components/__styled__/Main'

import Header from './Header'
import Details from './Details'
import Achievements from './Achievements'
import AddAchievementModal from 'pages/AchievementSets/AchievementSetDetails/AddAchievementModal'

const AchievementSetDetails = () => {
  // @ts-ignore
  const { achievementSetId } = useParams()

  const achievementSet = useSelector((state: RootState) =>
    selectAchievementSetById(state, { achievementSetId })
  )

  const addAchievementModal = useModal()

  if (!achievementSet) {
    return null
  }

  return (
    <>
      <Header achievementSetId={achievementSetId} />
      <Main>
        <Details achievementSetId={achievementSetId} />
        <Achievements achievementSetId={achievementSetId} />
      </Main>
      <FloatingButton
        variant="secondary"
        onClick={() => addAchievementModal.show()}
      >
        Add Achievement
      </FloatingButton>
      <AddAchievementModal
        modal={addAchievementModal}
        achievementSetId={achievementSetId}
      />
    </>
  )
}

export default React.memo(AchievementSetDetails)

import React from 'react'

import { useModal } from 'hooks/useModal'

import AddAchievementSetModal from 'pages/AchievementSets/AddAchievementSetModal'
import FloatingButton from 'components/FloatingButton'
import Main from 'components/__styled__/Main'

import Header from './Header'
import AchievementSetList from './AchievementSetList'
import { useSelector } from 'react-redux'
import { selectContentIsLoading } from 'Redux/ContentLoading'

const AchievementSets = () => {
  const addAchievmentSetModal = useModal()

  const contentIsLoading = useSelector(selectContentIsLoading)

  if (contentIsLoading) {
    return null
  }

  return (
    <>
      <Header />
      <Main>
        <AchievementSetList />
      </Main>
      <FloatingButton
        variant="secondary"
        onClick={() => addAchievmentSetModal.show()}
      >
        Add Achievement Set
      </FloatingButton>
      <AddAchievementSetModal modal={addAchievmentSetModal} />
    </>
  )
}

export default React.memo(AchievementSets)

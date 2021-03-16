import React from 'react'

import { useModal } from 'hooks/useModal'

import AddAchievementSetModal from 'components/Modals/AddAchievementSetModal'
import FloatingButton from 'components/FloatingButton'
import Main from 'components/__styled__/Main'

import Header from './Header'
import AchievementSetList from './AchievementSetList'

const AchievementSets = () => {
  const addAchievmentSetModal = useModal()

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

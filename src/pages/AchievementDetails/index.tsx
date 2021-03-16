import React from 'react'

import Main from 'components/__styled__/Main'
import Header from './Header'

const AchievementDetails = () => {
  return (
    <>
      <Header />
      <Main>Achievement</Main>
    </>
  )
}

export default React.memo(AchievementDetails)

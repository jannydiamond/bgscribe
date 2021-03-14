import React from 'react'

import Header from 'components/__styled__/Header'
import Title from 'components/Header/__styled__/Title'

const GamesHeader = () => {
  return (
    <Header basic>
      <Title>My games</Title>
    </Header>
  )
}

export default React.memo(GamesHeader)

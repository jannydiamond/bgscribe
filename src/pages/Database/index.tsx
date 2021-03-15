import React from 'react'

import Main from 'components/__styled__/Main'

import Header from './Header'
import Export from './Export'
import Import from './Import'

const Database = () => {
  return (
    <>
      <Header />
      <Main>
        <Export />
        <Import />
      </Main>
    </>
  )
}

export default React.memo(Database)

import React from 'react'

import LinkTile from 'components/LinkTile'
import Main from 'components/__styled__/Main'
import Header from './Header'

const Settings = () => {
  return (
    <>
      <Header />
      <Main>
        <LinkTile href="/settings/templates" title="Manage Session Templates" />
        <LinkTile href="/settings/about" title="About" />
      </Main>
    </>
  )
}

export default React.memo(Settings)

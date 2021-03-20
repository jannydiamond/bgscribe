import React from 'react'

import Main from 'components/__styled__/Main'
import P from 'components/__styled__/P'
import Header from './Header'

const About = () => {
  return (
    <>
      <Header />
      <Main>
        <P>BGScribe Version: {process.env.REACT_APP_VERSION}</P>
      </Main>
    </>
  )
}

export default React.memo(About)

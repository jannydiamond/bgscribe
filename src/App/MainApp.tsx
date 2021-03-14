import BottomNavigation from 'components/BottomNavigation'
import Header from 'components/Header'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchGamesWithSessions } from 'Redux/sideEffects'

import Routes from './Routes'
import Content from './__styled__/Content'
import Wrapper from './__styled__/Wrapper'

const MainApp = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGamesWithSessions())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Wrapper>
      <Header />
      <Content>
        <Routes />
      </Content>
      <BottomNavigation />

      <div id="modal-root" />
    </Wrapper>
  )
}

export default React.memo(MainApp)

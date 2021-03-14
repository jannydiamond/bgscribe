import BottomNavigation from 'components/BottomNavigation'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { init } from 'Redux/sideEffects'

import Routes from './Routes'
import Wrapper from './__styled__/Wrapper'

const MainApp = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(init())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Wrapper>
      <Routes />
      <BottomNavigation />

      <div id="modal-root" />
    </Wrapper>
  )
}

export default React.memo(MainApp)

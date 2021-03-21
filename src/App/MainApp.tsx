import BottomNavigation from 'components/BottomNavigation'
import Snackbars from 'components/Snackbars'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { init } from 'Redux/sideEffects'

import Routes from './Routes'

const MainApp = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(init())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Routes />
      <BottomNavigation />

      <Snackbars />
      <div id="modal-root" />
    </>
  )
}

export default React.memo(MainApp)

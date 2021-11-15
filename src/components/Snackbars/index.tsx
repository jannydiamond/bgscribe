import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectFirstSnackbarElement, snackbarSlice } from 'Redux/Snackbars'
import Snackbar from './Snackbar'

const Snackbars = () => {
  const dispatch = useDispatch()
  const currentSnackbar = useSelector(selectFirstSnackbarElement)

  const handleClose = () => {
    dispatch(snackbarSlice.actions.dequeue())
  }

  useEffect(() => {
    if(currentSnackbar) {
      const timer = setTimeout(() => {
        dispatch(snackbarSlice.actions.dequeue())
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [currentSnackbar, dispatch])

  if (!currentSnackbar) {
    return null
  }

  return (
    <Snackbar type={currentSnackbar.type} handleClose={handleClose}>
      {currentSnackbar.message}
    </Snackbar>
  )
}

export default React.memo(Snackbars)

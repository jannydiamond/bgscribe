import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetImportStatus, selectImportingStatus } from 'Redux/Database'
import { useSnackbar } from 'hooks/useSnackbar'

const SnackbarError = () => {
  const dispatch = useDispatch()

  const importingStatus = useSelector(selectImportingStatus)

  const importingErrorSnackbar = useSnackbar()

  const handleImportErrorClose = () => {
    dispatch(resetImportStatus())
    importingErrorSnackbar.hide()
  }

  useEffect(() => {
    if (importingStatus === 'error') {
      importingErrorSnackbar.show()
    }
  }, [importingStatus, importingErrorSnackbar])

  return (
    <importingErrorSnackbar.RenderSnackbar
      type="error"
      closeCallback={handleImportErrorClose}
    >
      An error occurred while importing the database. Please try again.
    </importingErrorSnackbar.RenderSnackbar>
  )
}

export default React.memo(SnackbarError)

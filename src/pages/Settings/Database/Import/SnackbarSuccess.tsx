import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetImportStatus, selectImportingStatus } from 'Redux/Database'
import { useSnackbar } from 'hooks/useSnackbar'

const SnackbarSuccess = () => {
  const dispatch = useDispatch()

  const importingStatus = useSelector(selectImportingStatus)

  const importingSuccessSnackbar = useSnackbar()

  const handleImportSuccessClose = () => {
    dispatch(resetImportStatus())
    importingSuccessSnackbar.hide()
  }

  useEffect(() => {
    if (importingStatus === 'success') {
      importingSuccessSnackbar.show()
    }
  }, [importingStatus, importingSuccessSnackbar])

  return (
    <importingSuccessSnackbar.RenderSnackbar
      type="success"
      closeCallback={handleImportSuccessClose}
    >
      Database import successful.
    </importingSuccessSnackbar.RenderSnackbar>
  )
}

export default React.memo(SnackbarSuccess)

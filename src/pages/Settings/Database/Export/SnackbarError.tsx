import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetExportStatus, selectExportingStatus } from 'Redux/Database'
import { useSnackbar } from 'hooks/useSnackbar'

const SnackbarError = () => {
  const dispatch = useDispatch()

  const exportingStatus = useSelector(selectExportingStatus)

  const exportingErrorSnackbar = useSnackbar()

  const handleExportErrorClose = () => {
    dispatch(resetExportStatus())
    exportingErrorSnackbar.hide()
  }

  useEffect(() => {
    if (exportingStatus === 'error') {
      exportingErrorSnackbar.show()
    }
  }, [exportingStatus, exportingErrorSnackbar])

  return (
    <exportingErrorSnackbar.RenderSnackbar
      type="error"
      closeCallback={handleExportErrorClose}
    >
      An error occured while exporting the database. Please try again.
    </exportingErrorSnackbar.RenderSnackbar>
  )
}

export default React.memo(SnackbarError)

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetExportStatus, selectExportingStatus } from 'Redux/Database'
import { useSnackbar } from 'hooks/useSnackbar'

const SnackbarSuccess = () => {
  const dispatch = useDispatch()

  const exportingStatus = useSelector(selectExportingStatus)

  const exportingSuccessSnackbar = useSnackbar()

  const handleExportSuccessClose = () => {
    dispatch(resetExportStatus())
    exportingSuccessSnackbar.hide()
  }

  useEffect(() => {
    if (exportingStatus === 'success') {
      exportingSuccessSnackbar.show()
    }
  }, [exportingStatus, exportingSuccessSnackbar])

  return (
    <exportingSuccessSnackbar.RenderSnackbar
      type="success"
      closeCallback={handleExportSuccessClose}
    >
      Exporting was successful.
    </exportingSuccessSnackbar.RenderSnackbar>
  )
}

export default React.memo(SnackbarSuccess)

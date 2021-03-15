import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { exportDatabase } from 'Redux/Database/sideEffects'
import { selectExportingStatus } from 'Redux/Database'

import Button from 'components/__styled__/Button'
import Form from 'components/__styled__/Form'

import ExportFileNameInput from './ExportFileNameInput'

const ExportForm = () => {
  const dispatch = useDispatch()
  const exportingStatus = useSelector(selectExportingStatus)

  const [fileName, setFileName] = useState<string>('bgScribeDb')

  const handleNameChange = (event: any) => setFileName(event.target.value)

  const handleSubmit = (event: any) => {
    event.preventDefault()

    dispatch(exportDatabase(fileName))
  }

  return (
    <Form id="exportDatabase" onSubmit={handleSubmit}>
      <ExportFileNameInput value={fileName} handleChange={handleNameChange} />
      <Button type="submit" disabled={exportingStatus === 'pending'}>
        Export Database
      </Button>
    </Form>
  )
}

export default React.memo(ExportForm)

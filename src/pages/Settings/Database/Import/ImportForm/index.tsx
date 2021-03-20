import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectImportingStatus } from 'Redux/Database'
import { usePrompt } from 'hooks/useModal'

import Button from 'components/__styled__/Button'
import Form from 'components/__styled__/Form'

import ImportFileInput from 'components/ImportFileInput'
import Prompt from './Prompt'

const ImportForm = () => {
  const importingStatus = useSelector(selectImportingStatus)
  const importPrompt = usePrompt()

  const [file, setFile] = useState<Blob | null>(null)
  const [fileValue, setFileValue] = useState<string>('')

  const handleFileChange = (event: any) => {
    setFile(event.target.files[0])
    setFileValue(event.target.value)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()

    if (!file) return

    importPrompt.show()
  }

  const resetFormValues = () => {
    setFile(null)
    setFileValue('')
  }

  return (
    <>
      <Form id="importDatabase" onSubmit={handleSubmit}>
        <ImportFileInput value={fileValue} handleChange={handleFileChange} />
        <Button type="submit" disabled={importingStatus === 'pending' || !file}>
          Import Database
        </Button>
      </Form>
      <Prompt
        prompt={importPrompt}
        file={file}
        resetFormValues={resetFormValues}
      />
    </>
  )
}

export default React.memo(ImportForm)

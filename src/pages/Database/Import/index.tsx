import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectImportingStatus } from 'Redux/Database'
import { importDatabase } from 'Redux/Database/sideEffects'

import Button from 'components/__styled__/Button'
import H2 from 'components/__styled__/H2'
import P from 'components/__styled__/P'
import Form from 'components/__styled__/Form'
import Fieldset from 'components/__styled__/Fieldset'
import Label from 'components/__styled__/Label'
import LabelText from 'components/__styled__/LabelText'
import FileInput from 'components/__styled__/FileInput'
import Wrapper from './__styled__/Wrapper'

const Import = () => {
  const dispatch = useDispatch()

  const [file, setFile] = useState<Blob | null>(null)
  const [fileValue, setFileValue] = useState<string>('')

  const importingStatus = useSelector(selectImportingStatus)

  const handleFileChange = (event: any) => {
    setFile(event.target.files[0])
    setFileValue(event.target.value)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()

    if (!file) return

    dispatch(importDatabase(file))

    setFile(null)
    setFileValue('')
  }

  return (
    <Wrapper>
      <H2>Import database</H2>
      <P>
        Choose a database file to import. Be aware that your existing database
        will be deleted.
      </P>
      <Form id="importDatabase" onSubmit={handleSubmit}>
        <Fieldset>
          <Label htmlFor="exportFileName">
            <LabelText>File</LabelText>
            <FileInput
              id="gameImage"
              type="file"
              accept=".json"
              onChange={handleFileChange}
              value={fileValue}
            />
          </Label>
        </Fieldset>
        <Button type="submit" disabled={importingStatus === 'pending' || !file}>
          Import Database
        </Button>
      </Form>
    </Wrapper>
  )
}

export default React.memo(Import)

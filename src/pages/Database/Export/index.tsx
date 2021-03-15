import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectExportingStatus } from 'Redux/Database'
import { exportDatabase } from 'Redux/Database/sideEffects'

import Button from 'components/__styled__/Button'
import H2 from 'components/__styled__/H2'
import P from 'components/__styled__/P'
import Form from 'components/__styled__/Form'
import Fieldset from 'components/__styled__/Fieldset'
import Label from 'components/__styled__/Label'
import LabelText from 'components/__styled__/LabelText'
import Input from 'components/__styled__/Input'

const Export = () => {
  const dispatch = useDispatch()

  const [fileName, setFileName] = useState<string>('bgScribeDb')

  const exportingStatus = useSelector(selectExportingStatus)

  const handleNameChange = (event: any) => setFileName(event.target.value)

  const handleSubmit = (event: any) => {
    event.preventDefault()

    dispatch(exportDatabase(fileName))
  }

  return (
    <>
      <H2>Export database</H2>
      <P>
        You can export your database for backbup. A file with the provided name
        will be downloaded.
      </P>
      <Form id="exportDatabase" onSubmit={handleSubmit}>
        <Fieldset>
          <Label htmlFor="exportFileName">
            <LabelText>Filename</LabelText>
            <Input
              id="exportFileName"
              onChange={handleNameChange}
              value={fileName}
            />
          </Label>
        </Fieldset>
        <Button type="submit" disabled={exportingStatus === 'pending'}>
          Export Database
        </Button>
      </Form>
    </>
  )
}

export default React.memo(Export)

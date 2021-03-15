import React from 'react'
import { useDispatch } from 'react-redux'
import { importDatabase } from 'Redux/Database/sideEffects'
import * as types from 'types'

type Props = {
  prompt: types.Prompt
  file: Blob | null
  resetFormValues: () => void
}
const Prompt = (props: Props) => {
  const dispatch = useDispatch()

  const handleYesImport = () => {
    if (!props.file) return
    dispatch(importDatabase(props.file))

    props.resetFormValues()

    props.prompt.hide()
  }

  const handleNoImport = () => {
    props.resetFormValues()

    props.prompt.hide()
  }

  return (
    <props.prompt.RenderPrompt
      titleLabel="Import database"
      yesHandler={handleYesImport}
      noHandler={handleNoImport}
    >
      Do you really want to import a new database? All your current data will be
      lost.
    </props.prompt.RenderPrompt>
  )
}

export default React.memo(Prompt)

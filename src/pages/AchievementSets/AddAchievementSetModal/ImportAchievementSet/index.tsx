import ImportFileInput from 'components/ImportFileInput'
import Button from 'components/__styled__/Button'
import Form from 'components/__styled__/Form'
import H2 from 'components/__styled__/H2'
import P from 'components/__styled__/P'
import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { importAchievementSet } from 'Redux/AchievementSets/sideEffects'

type Props = {
  callback: () => void
}

const ImportAchievementSet = (props: Props) => {
  const dispatch = useDispatch()

  const [json, setJson] = useState<string>('')

  const handleFileUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const reader = new FileReader()

      reader.onload = (event: any) => {
        if (typeof event.target.result === 'string') {
          setJson(event.target.result)
        }
      }

      if (e?.currentTarget?.files && e?.currentTarget?.files.length > 0) {
        const blob = e.currentTarget.files[0]
        reader.readAsText(blob)
      }
    },
    [setJson]
  )

  const handleSubmit = (event: any) => {
    event.preventDefault()
    props.callback()

    if (!json) return

    dispatch(importAchievementSet(json))
  }

  return (
    <Form id="importAchievementSet" onSubmit={handleSubmit}>
      <H2>Import Achievement Set</H2>
      <P>Choose an achievement set file to import.</P>
      <ImportFileInput handleChange={handleFileUpload} />
      <Button type="submit" disabled={!json}>
        Import
      </Button>
    </Form>
  )
}

export default React.memo(ImportAchievementSet)

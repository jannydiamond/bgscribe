import { saveAs } from 'file-saver'

const saveToFile = (json: string, name: string) => {
  const blob = new Blob([json], { type: 'text/json;charset=utf-8' })

  return saveAs(blob, `${name}.json`)
}

export default saveToFile

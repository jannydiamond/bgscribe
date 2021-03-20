import React from 'react'
import Fieldset from 'components/__styled__/Fieldset'
import Label from 'components/__styled__/Label'
import LabelText from 'components/__styled__/LabelText'
import FileInput from 'components/__styled__/FileInput'

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ImageFileInput = (props: Props) => {
  return (
    <Fieldset>
      <Label htmlFor="gameImage">
        <LabelText>Image (max. 500kB)</LabelText>
        <FileInput
          id="gameImage"
          type="file"
          accept="image/*"
          onChange={props.onChange}
        />
      </Label>
    </Fieldset>
  )
}

export default React.memo(ImageFileInput)

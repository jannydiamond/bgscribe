import styled from 'styled-components/macro'
import Input from './Input'

const LabelText = styled('span')`
  display: block;
  font-size: 12px;
  color: ${(props) => props.theme.colors.text.main};

  + ${Input}, + .w-md-editor {
    margin-top: 4px;
  }
`

export default LabelText

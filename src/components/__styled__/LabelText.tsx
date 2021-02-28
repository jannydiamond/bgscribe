import styled from 'styled-components/macro'
import Input from './Input'

const LabelText = styled('span')`
  display: block;
  font-size: 12px;

  + ${Input} {
    margin-top: 4px;
  }
`

export default LabelText

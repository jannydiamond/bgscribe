import styled from 'styled-components/macro'

const LabelText = styled('span')`
  display: block;
  font-size: 12px;
  color: ${(props) => props.theme.colors.text.main};

  + * {
    margin-top: 4px;
  }
`

export default LabelText

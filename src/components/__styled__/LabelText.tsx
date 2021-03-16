import styled from 'styled-components/macro'

const LabelText = styled('span')`
  display: block;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.text.main};

  + * {
    margin-top: 4px;
  }
`

export default LabelText

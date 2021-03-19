import styled from 'styled-components/macro'

const Legend = styled('legend')`
  display: block;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.text.main};

  + * {
    margin-top: 4px;
  }
`

export default Legend

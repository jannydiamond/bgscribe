import styled from 'styled-components/macro'

const Fieldset = styled('fieldset')`
  border: none;
  padding: 0;
  margin: 0;
  max-width: 624px;

  + fieldset,
  + button {
    margin-top: 16px;
  }
`

export default Fieldset

import styled from 'styled-components/macro'

import { default as ReactSelect } from 'react-select'

const Select = styled((props) => (
  <ReactSelect classNamePrefix="ReactSelect" {...props} />
))`
  .ReactSelect__control {
    height: 40px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.colors.gray.main};
    transition: border-color 0.2s ease-in-out;
    outline: 0;
    padding: 0 8px;
    color: ${(props) => props.theme.colors.text.dark};

    &:hover,
    &:focus {
      border-color: ${(props) => props.theme.colors.primary.main};
      caret-color: ${(props) => props.theme.colors.primary.main};
    }
  }
`

export default Select

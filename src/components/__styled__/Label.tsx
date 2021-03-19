import styled, { css } from 'styled-components/macro'

type Props = {
  isFormOption?: boolean
  disabled?: boolean
}

const Label = styled('label')<Props>`
  position: relative;
  display: block;

  + label {
    margin-top: 8px;
  }

  ${(props) =>
    props.isFormOption
      ? css`
          cursor: pointer;
        `
      : null}

  ${(props) =>
    props.disabled
      ? css`
          opacity: 0.5;
          cursor: default;
        `
      : null}
`

export default Label

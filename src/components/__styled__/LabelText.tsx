import styled, { css } from 'styled-components/macro'
import { setMaterialIconStyles } from 'themes/helpers/materialIcons'

type Props = {
  isFormOption?: boolean
  isChecked?: boolean
}

const LabelText = styled('span')<Props>`
  display: block;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.text.main};

  + * {
    margin-top: 4px;
  }

  ${(props) =>
    props.isFormOption
      ? css`
          display: flex;
          align-items: center;

          &::before {
            ${props.isChecked
              ? css`
                  content: 'radio_button_checked';
                  color: ${props.theme.colors.primary.main};
                `
              : css`
                  content: 'radio_button_unchecked';
                `}
            ${(props) => setMaterialIconStyles(props)}
            padding-right: 8px;
          }
        `
      : null}
`

export default LabelText

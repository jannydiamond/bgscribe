import styled, { css } from 'styled-components/macro'

type Props = {
  selected: boolean
}

const Wrapper = styled('button')<Props>`
  display: flex;
  align-items: center;
  position: relative;
  height: 64px;
  padding: 0 24px;
  background: #fff;
  border: none;
  outline: none;
  transition: color 0.2s ease-in-out;
  font-size: 1rem;
  font-family: 'Open Sans', Arial, sans-serif;

  &::after {
    position: absolute;
    content: '';
    bottom: -1px;
    left: 0;
    height: 3px;
    width: 100%;
    border-bottom: 3px solid transparent;
    transition: border-color 0.2s ease-in-out;
    overflow: hidden;
  }

  ${(props) =>
    props.selected
      ? css`
          color: ${props.theme.colors.primary.main};
          cursor: default;

          &::after {
            border-color: ${props.theme.colors.primary.main};
          }

          &:hover {
            pointer-events: none;

            &::after {
              bottom: -1px;
              border-color: ${props.theme.colors.primary.main};
            }
          }
        `
      : css`
          color: ${props.theme.colors.text.main};
          cursor: pointer;

          &:hover {
            &::after {
              border-color: ${props.theme.colors.gray.main};
            }
          }
        `}

  @media all and (min-width: 480px) {
    font-size: 1.25rem;
  }
`

export default Wrapper

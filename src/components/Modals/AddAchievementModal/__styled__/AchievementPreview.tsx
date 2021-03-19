import styled, { css } from 'styled-components/macro'
import { AchievementLevel } from 'types'

type Props = {
  level: AchievementLevel
  noImage?: boolean
}

const AchievementPreview = styled('div')<Props>`
  width: 240px;
  height: 240px;
  display: block;
  margin: 32px 0;
  border-radius: 16px;
  border: 8px solid
    ${(props) => props.theme.achievement.level[props.level].color};
  position: relative;

  ${(props) =>
    props.noImage
      ? css`
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${props.theme.colors.text.main};
        `
      : css`
          display: block;
        `}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`

export default AchievementPreview

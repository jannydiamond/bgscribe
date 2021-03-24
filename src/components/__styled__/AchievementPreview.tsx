import styled from 'styled-components/macro'

import Wrapper from 'components/AchievementAvatar/__styled__/Wrapper'
import { AchievementLevel } from 'types'

type Props = {
  level: AchievementLevel
  unlocked?: boolean
}

const AchievementPreview = styled('div')<Props>`
  width: 200px;
  height: 200px;
  display: block;
  margin: 32px 0;
  position: relative;
  background: ${(props) =>
    props.unlocked
      ? props.theme.achievement.level[props.level].unlockedGradient
      : props.theme.achievement.level[props.level].lockedGradient};
  border-radius: 16px;
  padding: 8px;

  @media all and (min-width: 480px) {
    width: 300px;
    height: 300px;
  }

  ${Wrapper} {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    border: 4px solid
      ${(props) =>
        props.unlocked
          ? props.theme.achievement.level[props.level].unlocked
          : props.theme.achievement.level[props.level].locked};
    padding: 0;
  }

  .ra {
    font-size: 3rem;
  }
`

export default AchievementPreview

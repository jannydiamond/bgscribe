import styled from 'styled-components/macro'
import { AchievementLevel } from 'types'

type Props = {
  level: AchievementLevel
  unlocked?: boolean
}

const Wrapper = styled('div')<Props>`
  height: 64px;
  width: 64px;
  flex: 0 0 auto;
  overflow: hidden;
  border-radius: 4px;
  border: 4px solid ${props => props.unlocked ? props.theme.achievement.level[props.level].unlocked : props.theme.achievement.level[props.level].locked};

  + * {
    padding-left: 16px;
  }
`

export default Wrapper

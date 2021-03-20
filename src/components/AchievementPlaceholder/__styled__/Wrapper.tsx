import styled from 'styled-components/macro'
import { AchievementLevel } from 'types'

type Props = {
  level: AchievementLevel
  unlocked?: boolean
}

const Wrapper = styled('div')<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border-radius: 4px;
  background: #fff;
  color: ${props => props.unlocked ? props.theme.achievement.level[props.level].unlocked : props.theme.colors.gray.main};y
`

export default Wrapper

import { GameAchievement } from 'types'
import { State } from '.'

export const createGameAchievementId = (ga: GameAchievement) =>
  `${ga.gameId}_${ga.achievementId}`

export const normalizedGameAchievements = (
  gameAchievements: GameAchievement[]
): State => ({
  byGameAchievementId: gameAchievements.reduce((acc, ga) => {
    const id = createGameAchievementId(ga)

    return {
      ...acc,
      [id]: ga,
    }
  }, {}),
})

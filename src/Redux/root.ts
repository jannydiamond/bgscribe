import { closestTo, compareDesc } from 'date-fns'
import { createSelector } from 'reselect'
import { AchievementSetId } from 'types'
import { selectAchievementsById } from './Achievements'
import {
  selectAchievementSetById,
  selectAchievementSetsById,
} from './AchievementSets'
import { selectGameAchievementsByGameId } from './GameAchievements'

import {
  selectGamesWithoutSessions,
  selectGamesContainingSessions,
} from './Games'
import { selectSessionsById } from './Sessions'

export const selectGamesWithAggregatedSessions = createSelector(
  [selectGamesContainingSessions, selectSessionsById],
  (games, sessionsById) => {
    return games.map((game) => {
      return {
        ...game,
        aggregatedSessions: game.sessions.map((id) => sessionsById[id]),
      }
    })
  }
)

export const selectGamesWithLastPlayedDate = createSelector(
  [selectGamesWithAggregatedSessions],
  (games) => {
    return games.map((game) => {
      const sessionDates = game.aggregatedSessions.map(
        (session) => session.datePlayed
      )
      const currentDate = new Date()

      return {
        ...game,
        lastPlayed: closestTo(currentDate, sessionDates),
      }
    })
  }
)

export const selectLastPlayedGamesSorted = createSelector(
  [selectGamesWithLastPlayedDate],
  (lastPlayedGames) =>
    [...lastPlayedGames].sort((gameA, gameB) => {
      return compareDesc(gameA.lastPlayed, gameB.lastPlayed)
    })
)

export const selectGamesArrayWithLatestPlayedDateSorted = createSelector(
  [selectLastPlayedGamesSorted, selectGamesWithoutSessions],
  (lastPlayedGames, gamesWithoutSessions) => {
    return [...lastPlayedGames, ...gamesWithoutSessions]
  }
)

const sortGameAchievements = <T extends { achieved: boolean; title: string }>(
  a: T,
  b: T
) => {
  if (a.achieved && !b.achieved) {
    return -1
  } else if (!a.achieved && b.achieved) {
    return 1
  } else if (a.title < b.title) {
    return -1
  } else if (a.title > b.title) {
    return 1
  } else {
    return 0
  }
}

export const selectSetAchievementsByIdByGame = createSelector(
  [
    selectAchievementsById,
    selectGameAchievementsByGameId,
    selectAchievementSetsById,
  ],
  (achievementsById, gameAchievements, achievementSetsById) => {
    const achievements = gameAchievements.map((gameAchievement) => ({
      ...gameAchievement,
      ...achievementsById[gameAchievement.achievementId],
    }))

    return achievements.reduce(
      (
        acc: Record<
          AchievementSetId,
          {
            id: AchievementSetId
            title: string
            achievements: typeof achievements
          }
        >,
        achievement
      ) => {
        const achievementSet = achievement.achievementSetId
          ? achievementSetsById[achievement.achievementSetId]
          : { id: 'undefined', title: 'Unknown Set' }

        console.log({
          achievementSet,
          achievementSetId: achievement.achievementSetId,
        })

        const existingSet = acc[achievementSet.id]
        const updatedAchievements = existingSet
          ? [...existingSet.achievements, achievement]
          : [achievement]
        const sortedAchievements = updatedAchievements.sort(
          sortGameAchievements
        )

        return {
          ...acc,
          [achievementSet.id]: {
            ...achievementSet,
            achievements: sortedAchievements,
          },
        }
      },
      {}
    )
  }
)

export const selectAchievementsByAchievementSetId = createSelector(
  [selectAchievementsById, selectAchievementSetById],
  (achievementsById, achievementSet) => {
    return achievementSet.achievements.map((achievementId) => {
      return achievementsById[achievementId]
    })
  }
)

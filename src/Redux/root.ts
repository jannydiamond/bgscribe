import { closestTo, compareDesc } from 'date-fns'
import { createSelector } from 'reselect'
import { selectAchievementsById } from './Achievements'
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

export const selectAchievementsByGame = createSelector(
  [selectAchievementsById, selectGameAchievementsByGameId],
  (achievementsById, gameAchievements) =>
    gameAchievements
      .map((gameAchievement) => ({
        ...gameAchievement,
        ...achievementsById[gameAchievement.achievementId],
      }))
      .sort((a, b) => {
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
      })
)

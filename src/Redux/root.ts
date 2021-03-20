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
    gameAchievements.map((ga) => achievementsById[ga.achievementId])
)

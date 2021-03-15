import Dexie from 'dexie'
import { TableNames } from 'types'

const db = new Dexie('BoardgameTracker')

db.version(1).stores({
  [TableNames.GAMES]: 'id, name, sessions, created',
  [TableNames.SESSIONS]:
    'id, gameId, datePlayed, amountOfPlayers, note, created',
})

db.version(2).stores({
  [TableNames.SESSION_TEMPLATES]: 'id, template, name',
})

db.version(3).stores({
  [TableNames.GAMES]: 'id, name, image, sessions, created',
})

db.version(4).stores({
  [TableNames.GAMES]: 'id, name, sessions, created', // remove image from being indexed
  [TableNames.ACHIEVEMENTS]: 'id, achievementSetId, title, level, image',
  [TableNames.ACHIEVEMENT_SETS]: 'id, title, tags, achievements, author',
  [TableNames.GAME_ACHIEVEMENTS]: 'gameId, achievementId, achieved',
})

export default db

import Dexie from 'dexie'
import { TableNames } from 'types'

const db = new Dexie('BGScribe')

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

db.version(5).stores({
  [TableNames.ACHIEVEMENTS]: 'id, achievementSetId, type, title, level', // remove image, add type
  [TableNames.ACHIEVEMENT_SETS]:
    'id, title, tags, version, achievements, author', // add version
  [TableNames.GAME_ACHIEVEMENTS]: null, // remove to change primary key
})

db.version(6).stores({
  [TableNames.GAME_ACHIEVEMENTS]: '[gameId+achievementId], achieved', // change primary key
})

export default db

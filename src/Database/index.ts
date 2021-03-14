import Dexie from 'dexie'
import { TableNames } from 'types'

const db = new Dexie('BoardgameTracker')

db.version(1).stores({
  [TableNames.GAMES]: 'id, name, sessions, created',
  Sessions: 'id, gameId, datePlayed, amountOfPlayers, note, created',
})

db.version(2).stores({
  SessionTemplates: 'id, template, name',
})

export default db

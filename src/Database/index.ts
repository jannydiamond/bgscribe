import Dexie from 'dexie'

const db = new Dexie('BoardgameTracker')

db.version(1).stores({
  Games: 'id, name, sessions, created',
  Sessions: 'id, gameId, datePlayed, amountOfPlayers, note, created',
})

export default db

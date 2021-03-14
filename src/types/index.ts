import { RenderModalType } from 'hooks/useModal'

export type Modal = {
  RenderModal: RenderModalType
  show: () => void
  hide: () => void
}

export type Game = {
  id: string
  name: string
  sessions: string[]
  created: Date
}

export type GameWithLastPlayedDate = Game & {
  lastPlayed?: Date | null
}

export type Games = {
  [id: string]: Game
}

export type Session = {
  id: string
  gameId: string
  datePlayed: Date
  amountOfPlayers: number
  note: string
  created: Date
}

export type Sessions = {
  [id: string]: Session
}

export type AddGamePayload = {
  id: string
  name: string
}

export type EditGamePayload = {
  id: string
  name: string
}

export type AddSessionPayload = {
  id: string
  gameId: string
  datePlayed: Date
  amountOfPlayers: number
  note: string
}

export type EditSessionPayload = {
  id: string
  datePlayed: Date
  amountOfPlayers: number
  note: string
}

export type AddSessionToGamePayload = {
  gameId: string
  sessionId: string
}

export type RemoveSessionFromGamePayload = {
  gameId: string
  sessionId: string
}

export enum TableNames {
  GAMES = 'Games',
  SESSIONS = 'Sessions',
}

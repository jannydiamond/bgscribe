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

export type Games = {
  [id: string]: Game
}

export type EditGamePayload = {
  id: string
  name: string
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

export type AddSessionPayload = {
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

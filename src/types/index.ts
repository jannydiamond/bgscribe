import { RenderModalType, RenderPromptType } from 'hooks/useModal'
import { RenderSnackbarType } from 'hooks/useSnackbar'

export type Modal = {
  RenderModal: RenderModalType
  show: () => void
  hide: () => void
}

export type Prompt = {
  RenderPrompt: RenderPromptType
  show: () => void
  hide: () => void
}

export type SnackbarType = 'default' | 'error' | 'success'

export type Snackbar = {
  RenderSnackbar: RenderSnackbarType
  show: () => void
  hide: () => void
}

///////////
// Games //
///////////

export type GameId = string

export type Game = {
  id: GameId
  name: string
  image: string
  sessions: string[]
  created: Date
}

export type GameWithLastPlayedDate = Game & {
  lastPlayed?: Date | null
}

export type Games = Record<GameId, Game>

//////////////
// Sessions //
//////////////

export type SessionId = string

export type Session = {
  id: SessionId
  gameId: string
  datePlayed: Date
  amountOfPlayers: number
  note: string
  created: Date
}

export type Sessions = Record<SessionId, Session>

//////////////////////
// SessionTemplates //
//////////////////////

export type SessionTemplateId = string

export type SessionTemplate = {
  id: SessionTemplateId
  name: string
  template: string
}

export type SessionTemplates = Record<SessionTemplateId, SessionTemplate>

//////////
// Misc //
//////////

// FIXME
// remove payloads and type them directly inside their action creators
export type AddGamePayload = {
  id: string
  name: string
  image?: any
}

export type EditGamePayload = {
  id: string
  name: string
  image?: any
}

export enum TableNames {
  GAMES = 'Games',
  SESSIONS = 'Sessions',
  SESSION_TEMPLATES = 'SessionTemplates',
}

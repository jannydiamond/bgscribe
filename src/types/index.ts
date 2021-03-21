import { RenderModalType, RenderPromptType } from 'hooks/useModal'
import { OptionsType } from 'react-select'

export type SelectOptions = OptionsType<{ value: string; label: string }>

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

export type ButtonVariants =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'ghostPrimary'
  | 'ghostSecondary'
  | 'outlinePrimary'
  | 'outlineSecondary'

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

//////////////////
// Achievements //
//////////////////

export type AchievementId = string

export const ACHIEVEMENT_LEVELS = [
  'regular',
  'bronze',
  'silver',
  'gold',
  'emerald',
] as const
export type AchievementLevel = typeof ACHIEVEMENT_LEVELS[number]

export type ProgressAchievementConfig =
  | { type: 'increase' }
  | { type: 'increaseBy'; amount: number }
  | { type: 'list'; list: Array<{ name: string; achieved: boolean }> }

export type AchievementType =
  | { type: 'regular' }
  | { type: 'progress'; config: ProgressAchievementConfig }

export type Achievement = {
  id: AchievementId
  type: AchievementType
  achievementSetId?: AchievementSetId // we might have achievements without a set (e.g. if a game still relates to it, but its set has been deleted
  title: string
  description?: string
  level: AchievementLevel
  image?: string
}

export type AchievementSetId = string
export type AchievementSet = {
  id: AchievementSetId
  title: string
  description?: string
  tags: string[] // => e.g. 'standard', 'spirit island'...
  version: string
  achievements: AchievementId[]
  author?: {
    name?: string
    email?: string
  }
  created: Date
}

export type GameAchievementId = string // => compound id from gameId and achievementId
export type GameAchievement = {
  gameId: GameId
  achievementId: AchievementId
  achieved: boolean
  achievedDate?: Date
}

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
  ACHIEVEMENTS = 'Achievements',
  ACHIEVEMENT_SETS = 'AchievementSets',
  GAME_ACHIEVEMENTS = 'GameAchievements',
}

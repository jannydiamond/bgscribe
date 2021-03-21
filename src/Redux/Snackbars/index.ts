import { createSlice } from '@reduxjs/toolkit'
import { editAchievement } from 'Redux/Achievements/sideEffects'
import {
  addAchievementSet,
  editAchievementSet,
  importAchievementSet,
} from 'Redux/AchievementSets/sideEffects'
import { importDatabase } from 'Redux/Database/sideEffects'
import { addGame, editGame } from 'Redux/Games/sideEffects'
import { editSession } from 'Redux/Sessions/sideEffects'
import {
  addSessionTemplate,
  deleteSessionTemplate,
  editSessionTemplate,
} from 'Redux/SessionTemplates/sideEffects'
import {
  addAchievement,
  addSession,
  deleteAchievementSet,
  deleteGame,
  removeAchievement,
  removeSession,
} from 'Redux/sideEffects'
import { RootState } from 'Redux/store'

export type SnackbarType = 'default' | 'error' | 'success'

export type Snackbar = {
  type: SnackbarType
  message: string
}

type State = {
  queue: Snackbar[]
}

const initialState: State = {
  queue: [],
}

export const snackbarSlice = createSlice({
  name: 'snackbars',
  initialState,
  reducers: {
    dequeue: (state) => {
      const [_head, ...tail] = state.queue
      return {
        queue: tail,
      }
    },
  },
  extraReducers: (builder) => {
    builder

      //////////////
      // Database //
      //////////////

      .addCase(importDatabase.fulfilled, (state, _) => {
        return {
          ...state,
          queue: [
            ...state.queue,
            {
              type: 'success',
              message: 'Database import successful!',
            },
          ],
        }
      })
      .addCase(importDatabase.rejected, (state, _) => {
        return {
          ...state,
          queue: [
            ...state.queue,
            {
              type: 'error',
              message:
                'An error occurred while importing the database. Please try again.',
            },
          ],
        }
      })

      ///////////
      // Games //
      ///////////

      .addCase(addGame.fulfilled, (state, _action) => {
        return {
          ...state,
          queue: [
            ...state.queue,
            {
              type: 'success',
              message: 'Game added succesfully.',
            },
          ],
        }
      })
      .addCase(addGame.rejected, (state, _action) => {
        return {
          ...state,
          queue: [
            ...state.queue,
            {
              type: 'error',
              message:
                'An error occurred while adding the Game. Please try again.',
            },
          ],
        }
      })

      .addCase(editGame.fulfilled, (state, _action) => {
        return {
          ...state,
          queue: [
            ...state.queue,
            {
              type: 'success',
              message: 'Game has been saved.',
            },
          ],
        }
      })
      .addCase(editGame.rejected, (state, _action) => {
        return {
          ...state,
          queue: [
            ...state.queue,
            {
              type: 'error',
              message: 'Could not save game. Please try again.',
            },
          ],
        }
      })

      .addCase(deleteGame.fulfilled, (state, _action) => {
        return {
          ...state,
          queue: [
            ...state.queue,
            {
              type: 'success',
              message: 'Game has been deleted.',
            },
          ],
        }
      })
      .addCase(deleteGame.rejected, (state, _action) => {
        return {
          ...state,
          queue: [
            ...state.queue,
            {
              type: 'error',
              message: 'Could not delete game. Please try again.',
            },
          ],
        }
      })

      //////////////
      // Sessions //
      //////////////

      .addCase(addSession.fulfilled, (state, _action) => {
        return {
          ...state,
          queue: [
            ...state.queue,
            {
              type: 'success',
              message: 'Session has been added.',
            },
          ],
        }
      })
      .addCase(addSession.rejected, (state, _action) => {
        return {
          ...state,
          queue: [
            ...state.queue,
            {
              type: 'error',
              message: 'Could not add session. Please try again.',
            },
          ],
        }
      })

      .addCase(removeSession.fulfilled, (state, _action) => {
        return {
          ...state,
          queue: [
            ...state.queue,
            {
              type: 'success',
              message: 'Session has been removed.',
            },
          ],
        }
      })
      .addCase(removeSession.rejected, (state, _action) => {
        return {
          ...state,
          queue: [
            ...state.queue,
            {
              type: 'error',
              message: 'Could not remove session. Please try again.',
            },
          ],
        }
      })

      .addCase(editSession.fulfilled, (state, _action) => {
        return {
          ...state,
          queue: [
            ...state.queue,
            {
              type: 'success',
              message: 'Session has been saved.',
            },
          ],
        }
      })
      .addCase(editSession.rejected, (state, _action) => {
        return {
          ...state,
          queue: [
            ...state.queue,
            {
              type: 'error',
              message: 'Could not save session. Please try again.',
            },
          ],
        }
      })

      //////////////////////
      // SessionTemplates //
      //////////////////////

      .addCase(addSessionTemplate.fulfilled, (state, _action) => {
        return {
          ...state,
          queue: [
            ...state.queue,
            {
              type: 'success',
              message: 'Session template has been added.',
            },
          ],
        }
      })
      .addCase(addSessionTemplate.rejected, (state, _action) => {
        return {
          ...state,
          queue: [
            ...state.queue,
            {
              type: 'error',
              message: 'Could not save session template. Please try again.',
            },
          ],
        }
      })

      .addCase(editSessionTemplate.fulfilled, (state, _action) => {
        return {
          ...state,
          queue: [
            ...state.queue,
            {
              type: 'success',
              message: 'Session template has been saved.',
            },
          ],
        }
      })
      .addCase(editSessionTemplate.rejected, (state, _action) => {
        return {
          ...state,
          queue: [
            ...state.queue,
            {
              type: 'error',
              message: 'Could not save session template. Please try again.',
            },
          ],
        }
      })

      .addCase(deleteSessionTemplate.fulfilled, (state, _action) => {
        return {
          ...state,
          queue: [
            ...state.queue,
            {
              type: 'success',
              message: 'Session template has been deleted.',
            },
          ],
        }
      })
      .addCase(deleteSessionTemplate.rejected, (state, _action) => {
        return {
          ...state,
          queue: [
            ...state.queue,
            {
              type: 'error',
              message: 'Could not delete session template. Please try again.',
            },
          ],
        }
      })

      /////////////////////
      // AchievementSets //
      /////////////////////

      .addCase(addAchievementSet.fulfilled, (state, _action) => {
        return {
          ...state,
          queue: [
            ...state.queue,
            {
              type: 'success',
              message: 'Achievement set has been added.',
            },
          ],
        }
      })
      .addCase(addAchievementSet.rejected, (state, _action) => {
        return {
          ...state,
          queue: [
            ...state.queue,
            {
              type: 'error',
              message: 'Could not save achievement set. Please try again.',
            },
          ],
        }
      })

      .addCase(deleteAchievementSet.fulfilled, (state, _action) => {
        return {
          ...state,
          queue: [
            ...state.queue,
            {
              type: 'success',
              message: 'Achievement set has been deleted.',
            },
          ],
        }
      })
      .addCase(deleteAchievementSet.rejected, (state, _action) => {
        return {
          ...state,
          queue: [
            ...state.queue,
            {
              type: 'error',
              message: 'Could not delete achievement set. Please try again.',
            },
          ],
        }
      })

      .addCase(editAchievementSet.fulfilled, (state, _action) => {
        return {
          ...state,
          queue: [
            ...state.queue,
            {
              type: 'success',
              message: 'Achievement set has been saved.',
            },
          ],
        }
      })
      .addCase(editAchievementSet.rejected, (state, _action) => {
        return {
          ...state,
          queue: [
            ...state.queue,
            {
              type: 'error',
              message: 'Could not save achievement set. Please try again.',
            },
          ],
        }
      })

      .addCase(importAchievementSet.fulfilled, (state, _action) => {
        return {
          ...state,
          queue: [
            ...state.queue,
            {
              type: 'success',
              message: 'Achievement set has been imported.',
            },
          ],
        }
      })
      .addCase(editAchievementSet.rejected, (state, _action) => {
        return {
          ...state,
          queue: [
            ...state.queue,
            {
              type: 'error',
              message: 'Could not import achievement set. Please try again.',
            },
          ],
        }
      })

      //////////////////
      // Achievements //
      //////////////////

      .addCase(addAchievement.fulfilled, (state, _action) => {
        return {
          ...state,
          queue: [
            ...state.queue,
            {
              type: 'success',
              message: 'Achievement has been added.',
            },
          ],
        }
      })
      .addCase(addAchievement.rejected, (state, _action) => {
        return {
          ...state,
          queue: [
            ...state.queue,
            {
              type: 'error',
              message: 'Could not save achievement. Please try again.',
            },
          ],
        }
      })

      .addCase(removeAchievement.fulfilled, (state, _action) => {
        return {
          ...state,
          queue: [
            ...state.queue,
            {
              type: 'success',
              message: 'Achievement has been removed.',
            },
          ],
        }
      })
      .addCase(removeAchievement.rejected, (state, _action) => {
        return {
          ...state,
          queue: [
            ...state.queue,
            {
              type: 'error',
              message: 'Could not remove achievement. Please try again.',
            },
          ],
        }
      })

      .addCase(editAchievement.fulfilled, (state, _action) => {
        return {
          ...state,
          queue: [
            ...state.queue,
            {
              type: 'success',
              message: 'Achievement has been saved.',
            },
          ],
        }
      })
      .addCase(editAchievement.rejected, (state, _action) => {
        return {
          ...state,
          queue: [
            ...state.queue,
            {
              type: 'error',
              message: 'Could not save achievement. Please try again.',
            },
          ],
        }
      })
  },
})

export const selectFirstSnackbarElement = (state: RootState) =>
  state.Snackbar.queue[0]

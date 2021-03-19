import { createAsyncThunk } from '@reduxjs/toolkit'

import { Achievement, TableNames } from 'types'

import db from 'Database'
import { base64ToURL } from 'Redux/sideEffects'

export const editAchievement = createAsyncThunk(
  `${TableNames.ACHIEVEMENTS}/editAchievement`,
  async (achievement: Achievement) => {
    const { id, title, image, type, description, level } = achievement

    const response = await db
      .table(TableNames.ACHIEVEMENTS)
      .update(id, {
        title: title !== '' ? title : id,
        ...(image?.startsWith('data:image/') ? { image } : {}), // => only write if is base64 encoded image
        type,
        description,
        level,
      })
      .then((updated) => {
        if (updated === 1) {
          return db.table(TableNames.ACHIEVEMENTS).get(id)
        }
      })

    const imageUrl = image ? await base64ToURL(image) : ''

    return {
      ...response,
      image: imageUrl,
    }
  }
)

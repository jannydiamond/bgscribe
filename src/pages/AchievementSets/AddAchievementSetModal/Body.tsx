import React from 'react'

import * as types from 'types'


import ModalBodyWrapper from 'components/__styled__/ModalBodyWrapper'
import NewAchievementSet from './NewAchievementSet'
import {useTabbar} from 'hooks/useTabbar'
import ImportAchievementSet from './ImportAchievementSet'

type Props = {
  modal: types.Modal
}

const Body = ({ modal }: Props) => {
  const setTypeTabbar = useTabbar()

  return (
    <ModalBodyWrapper>
      <setTypeTabbar.RenderTabbar
        tabContents={[
            {
              title: 'New',
              jsx: <NewAchievementSet callback={modal.hide} />,
            },
            {
              title: 'Import',
              jsx: <ImportAchievementSet callback={modal.hide} />,
            },
            {
              title: 'Search',
              jsx: 'Search (coming soon)'
            }
        ]}
      />
    </ModalBodyWrapper>
  )
}

export default React.memo(Body)

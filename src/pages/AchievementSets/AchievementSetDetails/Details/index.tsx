import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'Redux/store'
import { selectAchievementSetById } from 'Redux/AchievementSets'

import KeyValueList from 'components/__styled__/KeyValueList'

import Wrapper from './__styled__/Wrapper'
import P from 'components/__styled__/P'
import Version from './Version'
import CreatedBy from './CreatedBy'
import DateAdded from './DateAdded'
import AchievementSetTags from './AchievementSetTags'

type Props = {
  achievementSetId: string
}

const Details = (props: Props) => {
  const achievementSet = useSelector((state: RootState) =>
    selectAchievementSetById(state, {
      achievementSetId: props.achievementSetId,
    })
  )

  return (
    <Wrapper>
      {achievementSet.description && <P>{achievementSet.description}</P>}
      <KeyValueList>
        <Version achievementSetId={props.achievementSetId} />
        <CreatedBy achievementSetId={props.achievementSetId} />
        <DateAdded achievementSetId={props.achievementSetId} />
      </KeyValueList>
      <AchievementSetTags achievementSetId={props.achievementSetId} />
    </Wrapper>
  )
}

export default React.memo(Details)

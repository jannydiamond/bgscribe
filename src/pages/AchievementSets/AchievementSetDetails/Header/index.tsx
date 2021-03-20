import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'Redux/store'

import { selectAchievementSetById } from 'Redux/AchievementSets'

import HeaderInner from 'components/__styled__/Header'
import BackLink from 'components/Header/BackLink'
import Menu from 'components/Header/Menu'
import Title from 'components/Header/__styled__/Title'

import MenuContent from './MenuContent'

type Props = {
  achievementSetId: string
}

const Header = (props: Props) => {
  const achievementSet = useSelector((state: RootState) =>
    selectAchievementSetById(state, {
      achievementSetId: props.achievementSetId,
    })
  )

  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

  return (
    <HeaderInner>
      <BackLink to="/achievement-sets">Back to achievement sets</BackLink>
      <Title>{achievementSet.title}</Title>
      <Menu
        label="Achievement set menu"
        isOpen={menuIsOpen}
        setMenuIsOpen={setMenuIsOpen}
      >
        <MenuContent
          achievementSetId={achievementSet.id}
          closeFlyout={() => setMenuIsOpen(false)}
        />
      </Menu>
    </HeaderInner>
  )
}

export default React.memo(Header)

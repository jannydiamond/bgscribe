import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'Redux/store'
import { selectAchievementById } from 'Redux/Achievements'

import HeaderInner from 'components/__styled__/Header'
import BackLink from 'components/Header/BackLink'
import Menu from 'components/Header/Menu'
import Title from 'components/Header/__styled__/Title'
import MenuContent from './MenuContent'

type Props = {
  achievementId: string
}

const Header = (props: Props) => {
  const achievement = useSelector((state: RootState) =>
    selectAchievementById(state, { achievementId: props.achievementId })
  )

  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

  return (
    <HeaderInner>
      <BackLink to={`/achievement-sets/${achievement.achievementSetId}`}>
        Back to achievement set
      </BackLink>
      <Title>{achievement.title}</Title>
      <Menu
        label="Achievement Menu"
        isOpen={menuIsOpen}
        setMenuIsOpen={setMenuIsOpen}
      >
        <MenuContent
          achievementId={achievement.id}
          achievementSetId={achievement.achievementSetId ?? ''}
          closeFlyout={() => setMenuIsOpen(false)}
        />
      </Menu>
    </HeaderInner>
  )
}

export default React.memo(Header)

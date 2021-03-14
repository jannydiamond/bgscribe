import React from 'react'

import Link from './Link'

import Wrapper from './__styled__/Wrapper'
import LinkList from './__styled__/LinkList'
import LinkListItem from './__styled__/LinkListItem'

const BottomNavigation = () => {
  return (
    <Wrapper>
      <LinkList>
        <LinkListItem>
          <Link
            to="/games"
            label="Games"
            icon="ra-perspective-dice-one"
            isRpg
          />
        </LinkListItem>
        <LinkListItem>
          <Link to="/templates" label="Session Templates" icon="backup_table" />
        </LinkListItem>
        <LinkListItem>
          <Link to="/settings" label="Settings" icon="settings" />
        </LinkListItem>
      </LinkList>
    </Wrapper>
  )
}

export default React.memo(BottomNavigation)

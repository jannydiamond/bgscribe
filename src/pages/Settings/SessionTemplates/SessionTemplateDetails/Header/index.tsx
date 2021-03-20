import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'Redux/store'
import { selectSessionTemplateById } from 'Redux/SessionTemplates'

import HeaderInner from 'components/__styled__/Header'
import BackLink from 'components/Header/BackLink'
import Menu from 'components/Header/Menu'
import Title from 'components/Header/__styled__/Title'

import MenuContent from './MenuContent'

type Props = {
  templateId: string
}

const SessionTemplateDetailsHeader = (props: Props) => {
  const template = useSelector((state: RootState) =>
    selectSessionTemplateById(state, { templateId: props.templateId })
  )

  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

  return (
    <HeaderInner>
      <BackLink to={`/settings/templates`}>
        Back to session template overview
      </BackLink>
      <Title>Template: {template.name}</Title>
      <Menu
        label="Session Template Menu"
        isOpen={menuIsOpen}
        setMenuIsOpen={setMenuIsOpen}
      >
        <MenuContent
          templateId={props.templateId}
          closeFlyout={() => setMenuIsOpen(false)}
        />
      </Menu>
    </HeaderInner>
  )
}

export default React.memo(SessionTemplateDetailsHeader)

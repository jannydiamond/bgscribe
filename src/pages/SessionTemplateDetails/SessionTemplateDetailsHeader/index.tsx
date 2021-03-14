import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'Redux/store'

import Header from 'components/__styled__/Header'
import BackLink from 'components/Header/BackLink'
import Menu from 'components/Header/Menu'
import Title from 'components/Header/__styled__/Title'

import { selectSessionTemplateById } from 'Redux/SessionTemplates'

type Props = {
  templateId: string
}

const SessionTemplateDetailsHeader = (props: Props) => {
  const template = useSelector((state: RootState) =>
    selectSessionTemplateById(state, { templateId: props.templateId })
  )

  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

  return (
    <Header>
      <BackLink to={`/templates`}>Back to session template overview</BackLink>
      <Title>Template: {template.name}</Title>
      <Menu
        label="Session Template Menu"
        isOpen={menuIsOpen}
        setMenuIsOpen={setMenuIsOpen}
      >
        <p>TODO</p>
      </Menu>
    </Header>
  )
}

export default React.memo(SessionTemplateDetailsHeader)

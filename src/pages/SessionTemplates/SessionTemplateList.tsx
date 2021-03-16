import React from 'react'
import { useSelector } from 'react-redux'

import { selectSessionTemplatesList } from 'Redux/SessionTemplates'

import LinkTile from 'components/LinkTile'
import P from 'components/__styled__/P'

const SessionTemplateList = () => {
  const sessionTemplates = useSelector(selectSessionTemplatesList)

  return (
    <>
      {sessionTemplates.length > 0 ? (
        sessionTemplates.map((template) => (
          <LinkTile
            key={template.id}
            href={`/settings/templates/${template.id}`}
            title={template.name}
          />
        ))
      ) : (
        <P>No templates have been added, yet.</P>
      )}
    </>
  )
}

export default React.memo(SessionTemplateList)

import React from 'react'

import MenuList from 'components/Header/Menu/__styled__/MenuList'

import EditSessionTemplate from './EditSessionTemplate'
import DeleteSessionTemplate from './DeleteSessionTemplate'

type Props = {
  templateId: string
  closeFlyout: () => void
}

const MenuContent = ({ templateId, closeFlyout }: Props) => {
  return (
    <MenuList>
      <EditSessionTemplate templateId={templateId} closeFlyout={closeFlyout} />
      <DeleteSessionTemplate
        templateId={templateId}
        closeFlyout={closeFlyout}
      />
    </MenuList>
  )
}

export default React.memo(MenuContent)

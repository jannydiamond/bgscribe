import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'Redux/store'
import { selectSessionTemplateById } from 'Redux/SessionTemplates'

import { useModal } from 'hooks/useModal'

import EditSessionTemplateModal from 'pages/Settings/SessionTemplates/SessionTemplateDetails/Header/MenuContent/EditSessionTemplateModal'
import Icon from 'components/Icon'

import MenuListItem from 'components/Header/Menu/__styled__/MenuListItem'
import MenuListButton from 'components/Header/Menu/__styled__/MenuListButton'

type Props = {
  templateId: string
  closeFlyout: () => void
}

const EditSessionTemplate = (props: Props) => {
  const template = useSelector((state: RootState) =>
    selectSessionTemplateById(state, { templateId: props.templateId })
  )

  const editSessionTemplateModal = useModal()

  const handleEditSessionTemplate = () => {
    props.closeFlyout()
    editSessionTemplateModal.show()
  }

  return (
    <MenuListItem>
      <MenuListButton onClick={handleEditSessionTemplate}>
        <Icon icon="edit" />
        Edit Template
      </MenuListButton>
      <EditSessionTemplateModal
        modal={editSessionTemplateModal}
        template={template}
      />
    </MenuListItem>
  )
}

export default React.memo(EditSessionTemplate)

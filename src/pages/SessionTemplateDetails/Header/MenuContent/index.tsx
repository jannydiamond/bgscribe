import React from 'react'
import { useSelector } from 'react-redux'

import { selectSessionTemplatesById } from 'Redux/SessionTemplates'

import { useModal } from 'hooks/useModal'

import EditSessionTemplateModal from 'components/Modals/EditSessionTemplateModal'
import DeleteSessionTemplateModal from 'components/Modals/DeleteSessionTemplateModal'

import Icon from 'components/Icon'
import MenuList from 'components/Header/Menu/__styled__/MenuList'
import MenuListItem from 'components/Header/Menu/__styled__/MenuListItem'
import MenuListButton from 'components/Header/Menu/__styled__/MenuListButton'

type Props = {
  templateId: string
  closeFlyout: () => void
}

const MenuContent = ({ templateId, closeFlyout }: Props) => {
  const templates = useSelector(selectSessionTemplatesById)

  const editSessionTemplateModal = useModal()
  const deleteSessionTemplateModal = useModal()

  const handleEditSession = () => {
    closeFlyout()
    editSessionTemplateModal.show()
  }

  const handleDeleteSession = () => {
    closeFlyout()
    deleteSessionTemplateModal.show()
  }

  return (
    <MenuList>
      <MenuListItem>
        <MenuListButton onClick={handleEditSession}>
          <Icon icon="edit" />
          Edit Template
        </MenuListButton>
        <EditSessionTemplateModal
          modal={editSessionTemplateModal}
          template={templates[templateId]}
        />
      </MenuListItem>
      <MenuListItem>
        <MenuListButton onClick={handleDeleteSession} delete>
          <Icon icon="delete" />
          Delete Template
        </MenuListButton>
        <DeleteSessionTemplateModal
          modal={deleteSessionTemplateModal}
          template={templates[templateId]}
        />
      </MenuListItem>
    </MenuList>
  )
}

export default React.memo(MenuContent)

import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'Redux/store'
import { selectSessionTemplateById } from 'Redux/SessionTemplates'

import { useModal } from 'hooks/useModal'

import DeleteSessionTemplateModal from 'components/Modals/DeleteSessionTemplateModal'
import Icon from 'components/Icon'

import MenuListItem from 'components/Header/Menu/__styled__/MenuListItem'
import MenuListButton from 'components/Header/Menu/__styled__/MenuListButton'

type Props = {
  templateId: string
  closeFlyout: () => void
}

const DeleteSessionTemplate = (props: Props) => {
  const template = useSelector((state: RootState) =>
    selectSessionTemplateById(state, { templateId: props.templateId })
  )

  const deleteSessionTemplateModal = useModal()

  const handleDeleteSessionTemplate = () => {
    props.closeFlyout()
    deleteSessionTemplateModal.show()
  }

  return (
    <MenuListItem>
      <MenuListButton onClick={handleDeleteSessionTemplate} delete>
        <Icon icon="delete" />
        Delete Template
      </MenuListButton>
      <DeleteSessionTemplateModal
        modal={deleteSessionTemplateModal}
        template={template}
      />
    </MenuListItem>
  )
}

export default React.memo(DeleteSessionTemplate)

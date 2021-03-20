import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'Redux/store'
import { selectSessionById } from 'Redux/Sessions'

import { useModal } from 'hooks/useModal'

import EditSessionModal from 'pages/Games/GameDetails/Sessions/SessionDetails/Header/MenuContent/EditSessionModal'
import Icon from 'components/Icon'

import MenuListItem from 'components/Header/Menu/__styled__/MenuListItem'
import MenuListButton from 'components/Header/Menu/__styled__/MenuListButton'

type Props = {
  sessionId: string
  closeFlyout: () => void
}

const EditSession = (props: Props) => {
  const session = useSelector((state: RootState) =>
    selectSessionById(state, { sessionId: props.sessionId })
  )

  const editSessionModal = useModal()

  const handleEditSession = () => {
    props.closeFlyout()
    editSessionModal.show()
  }

  return (
    <MenuListItem>
      <MenuListButton onClick={handleEditSession}>
        <Icon icon="edit" />
        Edit Session
      </MenuListButton>
      <EditSessionModal modal={editSessionModal} session={session} />
    </MenuListItem>
  )
}

export default React.memo(EditSession)

import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { RootState } from 'Redux/store'
import { selectSessionById } from 'Redux/Sessions'

import Main from 'components/__styled__/Main'

import Details from './Details'

import Header from './Header'
import Notes from './Notes'

const SessionDetails = () => {
  // @ts-ignore
  const { sessionId } = useParams()

  const session = useSelector((state: RootState) =>
    selectSessionById(state, { sessionId })
  )

  if (!session) {
    return null
  }

  return (
    <>
      <Header sessionId={session.id} />
      <Main>
        <Details sessionId={sessionId} />
        <Notes sessionId={sessionId} />
      </Main>
    </>
  )
}

export default React.memo(SessionDetails)

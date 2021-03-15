import React from 'react'
import { useSelector } from 'react-redux'
import MDEditor from '@uiw/react-md-editor'

import { RootState } from 'Redux/store'
import { selectSessionById } from 'Redux/Sessions'

import H2 from 'components/__styled__/H2'
import P from 'components/__styled__/P'
import Wrapper from './__styled__/Wrapper'

type Props = {
  sessionId: string
}
const Notes = (props: Props) => {
  const session = useSelector((state: RootState) =>
    selectSessionById(state, { sessionId: props.sessionId })
  )

  return (
    <>
      <H2>Notes</H2>
      {session.note ? (
        <Wrapper>
          <MDEditor.Markdown source={session.note} />
        </Wrapper>
      ) : (
        <P>There are no notes for this session.</P>
      )}
    </>
  )
}

export default React.memo(Notes)

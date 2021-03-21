import React from 'react'

import H2 from 'components/__styled__/H2'
import P from 'components/__styled__/P'

import ImportForm from './ImportForm'

import Wrapper from './__styled__/Wrapper'

const Import = () => {
  return (
    <Wrapper>
      <H2>Import database</H2>
      <P>
        Choose a database file to import. Be aware that your existing database
        will be deleted.
      </P>
      <ImportForm />
    </Wrapper>
  )
}

export default React.memo(Import)

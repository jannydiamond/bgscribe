import React from 'react'

import H2 from 'components/__styled__/H2'
import P from 'components/__styled__/P'

import ExportForm from './ExportForm'

const Export = () => {
  return (
    <>
      <H2>Export database</H2>
      <P>
        You can export your database for backbup. A file with the provided name
        will be downloaded.
      </P>
      <ExportForm />
    </>
  )
}

export default React.memo(Export)

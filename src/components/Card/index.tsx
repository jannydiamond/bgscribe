import React from 'react'

import Link from './__styled__/Link'
import Wrapper from './__styled__/Wrapper'

type Props = {
  to?: string
  children: React.ReactNode
}

const Card = ({ to, children }: Props) => {
  return (
    <>
      {to ? (
        <Link to={to}>
          <Wrapper>{children}</Wrapper>
        </Link>
      ) : (
        <Wrapper>{children}</Wrapper>
      )}{' '}
    </>
  )
}

export default Card

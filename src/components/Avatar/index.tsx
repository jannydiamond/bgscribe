import React from 'react'

import Wrapper from './__styled__/Wrapper'
import Image from './__styled__/Image'
import Placeholder from './__styled__/Placeholder'

type Props = {
  src: string
  alt: string
}

const Avatar = ({ src, alt }: Props) => {
  return (
    <Wrapper>{src ? <Image src={src} alt={alt} /> : <Placeholder />}</Wrapper>
  )
}

export default React.memo(Avatar)

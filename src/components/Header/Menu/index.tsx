import React, { useRef } from 'react'

import { useOnOutsideClick } from 'hooks/useOnOutsideClick'

import Button from './Button'
import Flyout from './Flyout'
import Wrapper from './__styled__/Wrapper'

type Props = {
  label: string
  isOpen: boolean
  children: React.ReactNode
  setMenuIsOpen: (value: boolean) => void
}

const Menu = ({ label, isOpen, children, setMenuIsOpen }: Props) => {
  const ref = useRef()

  useOnOutsideClick(ref, () => setMenuIsOpen(false))

  return (
    <Wrapper ref={ref}>
      <Button isOpen={isOpen} onClick={() => setMenuIsOpen(!isOpen)}>
        {label}
      </Button>
      <Flyout isOpen={isOpen}>{children}</Flyout>
    </Wrapper>
  )
}

export default React.memo(Menu)

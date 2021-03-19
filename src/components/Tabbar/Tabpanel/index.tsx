import React from 'react'

import Wrapper from './__styled__/Wrapper'

type Props = {
  tabbarName?: string
  tabValue: number
  selectedValue: number
  children: React.ReactNode
}

const Tabpanel = (props: Props) => {
  return (
    <Wrapper
      id={
        props.tabbarName
          ? `${props.tabbarName}Tabpanel-${props.tabValue}`
          : `tabpanel-${props.tabValue}`
      }
      aria-labelledby={
        props.tabbarName
          ? `${props.tabbarName}Tab-${props.tabValue}`
          : `tab-${props.tabValue}`
      }
      role="tabpanel"
      hidden={props.selectedValue !== props.tabValue}
    >
      {props.selectedValue === props.tabValue ? props.children : null}
    </Wrapper>
  )
}

export default React.memo(Tabpanel)

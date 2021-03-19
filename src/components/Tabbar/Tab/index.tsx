import React from 'react'

import Wrapper from './__styled__/Wrapper'

type Props = {
  label: string
  selectedValue: number
  tabValue: number
  tabbarName?: string
  setSelectedValue: (value: number) => void
}

const Tab = (props: Props) => {
  return (
    <Wrapper
      id={
        props.tabbarName
          ? `${props.tabbarName}Tab-${props.tabValue}`
          : `tab-${props.tabValue}`
      }
      aria-controls={
        props.tabbarName
          ? `${props.tabbarName}Tabpanel-${props.tabValue}`
          : `tabpanel-${props.tabValue}`
      }
      role="tab"
      onClick={() => props.setSelectedValue(props.tabValue)}
      selected={props.selectedValue === props.tabValue}
    >
      {props.label}
    </Wrapper>
  )
}

export default React.memo(Tab)

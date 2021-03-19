import React, { useState } from 'react'

import Tabbar from 'components/Tabbar'
import Tab from 'components/Tabbar/Tab'

type TabbarProps = {
  tabbarName?: string
  tabTitles: string[]
  children: React.ReactNode
}

export type RenderTabbarType = (props: TabbarProps) => JSX.Element

export const useTabbar = () => {
  const [selectedTabValue, setSelectedTabValue] = useState<number>(0)

  const RenderTabbar: RenderTabbarType = (props) => {
    return (
      <>
        <Tabbar>
          {props.tabTitles.map((title, index) => (
            <Tab
              key={title}
              tabbarName={props.tabbarName}
              tabValue={index}
              label={title}
              selectedValue={selectedTabValue}
              setSelectedValue={setSelectedTabValue}
            />
          ))}
        </Tabbar>
        {props.children}
      </>
    )
  }

  return {
    selectedTabValue,
    setSelectedTabValue,
    RenderTabbar,
  }
}

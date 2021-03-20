import React, { useState } from 'react'

import Tabbar from 'components/Tabbar'
import Tab from 'components/Tabbar/Tab'
import Tabpanel from 'components/Tabbar/Tabpanel'

type TabContent = {
  title: string
  jsx: React.ReactNode
}

type TabbarProps = {
  tabbarName?: string
  tabContents: TabContent[]
}

export type RenderTabbarType = (props: TabbarProps) => JSX.Element

export const useTabbar = () => {
  const [selectedTabValue, setSelectedTabValue] = useState<number>(0)

  const RenderTabbar: RenderTabbarType = (props) => {
    return (
      <>
        <Tabbar>
          {props.tabContents.map((tabContent, index) => (
            <Tab
              key={index}
              tabbarName={props.tabbarName}
              tabValue={index}
              label={tabContent.title}
              selectedValue={selectedTabValue}
              setSelectedValue={setSelectedTabValue}
            />
          ))}
        </Tabbar>
        {
          props.tabContents.map((tabContent, index) => (
            <Tabpanel
              key={index}
              tabValue={index}
              selectedValue={selectedTabValue}
            >
              {tabContent.jsx}
            </Tabpanel>
          ))
        }
      </>
    )
  }

  return {
    selectedTabValue,
    setSelectedTabValue,
    RenderTabbar,
  }
}

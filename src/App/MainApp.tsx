import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Games from 'pages/Games'
import Sessions from 'pages/Sessions'
import Header from 'components/Header'
import Wrapper from './__styled__/Wrapper'
import Content from './__styled__/Content'

const MainApp = () => {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Switch>
          <Route path="/:gameId">
            <Sessions />
          </Route>
          <Route path="/">
            <Games />
          </Route>
        </Switch>
      </Content>

      <div id="modal-root" />
    </Wrapper>
  )
}

export default React.memo(MainApp)

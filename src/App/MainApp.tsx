import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Games from 'pages/Games'
import Sessions from 'pages/Sessions'
import SessionDetails from 'pages/SessionDetails'
import Header from 'components/Header'

import Wrapper from './__styled__/Wrapper'
import Content from './__styled__/Content'
import {fetchGamesWithSessions} from 'Redux/sideEffects'

const MainApp = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGamesWithSessions())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Wrapper>
      <Switch>
        <Route path="/:gameId/:sessionId">
          <Header />
          <Content>
            <SessionDetails />
          </Content>
        </Route>
        <Route path="/:gameId">
          <Header />
          <Content>
            <Sessions />
          </Content>
        </Route>
        <Route path="/">
          <Header />
          <Content>
            <Games />
          </Content>
        </Route>
      </Switch>

      <div id="modal-root" />
    </Wrapper>
  )
}

export default React.memo(MainApp)

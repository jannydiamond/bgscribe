import React from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

import Games from 'pages/Games'
import Sessions from 'pages/Sessions'
import SessionDetails from 'pages/SessionDetails'

import RouteContent from './RouteContent'

const Routes = () => {
  return (
    <Switch>
      <Route path="/games/:gameId/:sessionId">
        <RouteContent>
          <SessionDetails />
        </RouteContent>
      </Route>
      <Route path="/games/:gameId">
        <RouteContent>
          <Sessions />
        </RouteContent>
      </Route>
      <Route path="/games">
        <RouteContent>
          <Games />
        </RouteContent>
      </Route>
      <Route path="/settings">
        <RouteContent>
          Boardgame Tracker {process.env.REACT_APP_VERSION}
        </RouteContent>
      </Route>
      <Route path="*">
        <Redirect to="/games" />
      </Route>
    </Switch>
  )
}

export default React.memo(Routes)

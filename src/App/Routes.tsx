import React from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

import Games from 'pages/Games'
import Sessions from 'pages/Sessions'
import SessionDetails from 'pages/SessionDetails'

import { useSelector } from 'react-redux'
import { selectContentIsLoading } from 'Redux/ContentLoading'
import P from 'components/__styled__/P'
import SessionTemplates from 'pages/SessionTemplates'
import SessionTemplateDetails from 'pages/SessionTemplateDetails'

const Routes = () => {
  const contentIsLoading = useSelector(selectContentIsLoading)

  if (contentIsLoading) {
    return <P>"Loading..."</P>
  }

  return (
    <Switch>
      <Route path="/games/:gameId/:sessionId">
        <SessionDetails />
      </Route>
      <Route path="/games/:gameId">
        <Sessions />
      </Route>
      <Route path="/games">
        <Games />
      </Route>
      <Route exact path="/templates">
        <SessionTemplates />
      </Route>
      <Route exact path="/templates/:templateId">
        <SessionTemplateDetails />
      </Route>
      <Route path="/settings">
        Boardgame Tracker {process.env.REACT_APP_VERSION}
      </Route>
      <Route path="*">
        <Redirect to="/games" />
      </Route>
    </Switch>
  )
}

export default React.memo(Routes)

import React from 'react'
import { useSelector } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'

import { selectContentIsLoading } from 'Redux/ContentLoading'

import Games from 'pages/Games'
import GameDetails from 'pages/GameDetails'
import SessionDetails from 'pages/SessionDetails'
import SessionTemplates from 'pages/SessionTemplates'
import SessionTemplateDetails from 'pages/SessionTemplateDetails'
import Settings from 'pages/Settings'
import About from 'pages/About'

const Routes = () => {
  const contentIsLoading = useSelector(selectContentIsLoading)

  if (contentIsLoading) {
    return null
  }

  return (
    <Switch>
      <Route path="/games/:gameId/:sessionId">
        <SessionDetails />
      </Route>
      <Route path="/games/:gameId">
        <GameDetails />
      </Route>
      <Route path="/games">
        <Games />
      </Route>
      <Route exact path="/templates/:templateId">
        <SessionTemplateDetails />
      </Route>
      <Route exact path="/templates">
        <SessionTemplates />
      </Route>
      <Route path="/settings/templates/:templateId">
        <SessionTemplateDetails />
      </Route>
      <Route path="/settings/templates">
        <SessionTemplates />
      </Route>
      <Route path="/settings/about">
        <About />
      </Route>
      <Route path="/settings">
        <Settings />
      </Route>
      <Route path="*">
        <Redirect to="/games" />
      </Route>
    </Switch>
  )
}

export default React.memo(Routes)

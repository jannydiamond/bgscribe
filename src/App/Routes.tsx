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
import Database from 'pages/Database'
import About from 'pages/About'
import AchievementSets from 'pages/AchievementSets'
import AchievementSetDetails from 'pages/AchievementSetDetails'
import AchievementDetails from 'pages/AchievementDetails'

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
      <Route path="/achievement-sets/:achievementSetId/:achievementId">
        <AchievementDetails />
      </Route>
      <Route path="/achievement-sets/:achievementSetId">
        <AchievementSetDetails />
      </Route>
      <Route path="/achievement-sets">
        <AchievementSets />
      </Route>
      <Route path="/settings/templates/:templateId">
        <SessionTemplateDetails />
      </Route>
      <Route path="/settings/templates">
        <SessionTemplates />
      </Route>
      <Route path="/settings/database">
        <Database />
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

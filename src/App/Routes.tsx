import React from 'react'
import { useSelector } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'

import { selectContentIsLoading } from 'Redux/ContentLoading'

import Games from 'pages/Games'
import GameDetails from 'pages/Games/GameDetails'
import SessionDetails from 'pages/Games/GameDetails/Sessions/SessionDetails'
import SessionTemplates from 'pages/Settings/SessionTemplates'
import SessionTemplateDetails from 'pages/Settings/SessionTemplates/SessionTemplateDetails'
import Settings from 'pages/Settings'
import Database from 'pages/Settings/Database'
import About from 'pages/Settings/About'
import AchievementSets from 'pages/AchievementSets'
import AchievementSetDetails from 'pages/AchievementSets/AchievementSetDetails'
import AchievementDetails from 'pages/AchievementSets/AchievementSetDetails/AchievementDetails'

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

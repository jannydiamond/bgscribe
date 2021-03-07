import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import * as types from 'types'

import { selectGamesArray } from 'Redux/Games'
import { selectSessionsArray } from 'Redux/Sessions'

import { fetchGames } from 'Redux/Games/sideEffects'
import { fetchSessions } from 'Redux/Sessions/sideEffects'

import Games from 'pages/Games'
import Sessions from 'pages/Sessions'
import Header from 'components/Header'
import Wrapper from './__styled__/Wrapper'
import Content from './__styled__/Content'

const MainApp = () => {
  const dispatch = useDispatch()

  const gamesArray: types.Game[] = useSelector(selectGamesArray)

  const sessionsArray: types.Session[] = useSelector(selectSessionsArray)

  useEffect(() => {
    gamesArray.length === 0 && dispatch(fetchGames())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    sessionsArray.length === 0 && dispatch(fetchSessions())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Wrapper>
      <Switch>
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

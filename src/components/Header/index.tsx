import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { format } from 'date-fns'

import { selectGamesById } from 'Redux/Games'
import { selectSessionsById } from 'Redux/Sessions'

import BackLink from './BackLink'
import Menu from './Menu'
import GameMenu from './Menu/GameMenu'
import SessionMenu from './Menu/SessionMenu'
import Title from './__styled__/Title'
import Wrapper from './__styled__/Wrapper'

const Header = () => {
  const games = useSelector(selectGamesById)
  const sessions = useSelector(selectSessionsById)

  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

  // FIXME
  // refactor this component and handle the header case on each respective page instead
  if(Object.keys(games).length < 1 || Object.keys(sessions).length < 1) {
    return null
  }

  return (
    <Switch>
      <Route
        path="/games/:gameId/:sessionId"
        render={(props: any) => (
          <Wrapper>
            <BackLink to={`/games/${props.match.params.gameId}`}>
              Back to sessions overview
            </BackLink>
            <Title>
              {format(
                sessions[props.match.params.sessionId]?.datePlayed,
                'dd.MM.yyyy'
              ) ?? ''}
            </Title>
            <Menu
              label="Session Menu"
              isOpen={menuIsOpen}
              setMenuIsOpen={setMenuIsOpen}
            >
              <SessionMenu
                id={props.match.params.sessionId}
                gameId={props.match.params.gameId}
                closeFlyout={() => setMenuIsOpen(false)}
              />
            </Menu>
          </Wrapper>
        )}
      />
      <Route
        path="/games/:gameId"
        render={(props: any) => (
          <Wrapper>
            <BackLink to="/games">Back to games overview</BackLink>
            <Title>{games[props.match.params.gameId]?.name ?? ''}</Title>
            <Menu
              label="Games menu"
              isOpen={menuIsOpen}
              setMenuIsOpen={setMenuIsOpen}
            >
              <GameMenu
                id={props.match.params.gameId}
                closeFlyout={() => setMenuIsOpen(false)}
              />
            </Menu>
          </Wrapper>
        )}
      />
      <Route
        path="/games"
        render={() => (
          <Wrapper basic>
            <Title>My games</Title>
          </Wrapper>
        )}
      />
      <Route
        path="/settings"
        render={() => (
          <Wrapper basic>
            <Title>Settings</Title>
          </Wrapper>
        )}
      />
    </Switch>
  )
}

export default React.memo(Header)

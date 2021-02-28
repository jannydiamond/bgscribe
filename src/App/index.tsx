import React from 'react'
import { ThemeProvider } from 'styled-components/macro'
import { BrowserRouter as Router } from 'react-router-dom'

import GlobalStyles from 'GlobalStyles'
import mainTheme from 'themes/main'

import MainApp from './MainApp'

const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <Router>
        <GlobalStyles />
        <MainApp />
      </Router>
    </ThemeProvider>
  )
}

export default React.memo(App)

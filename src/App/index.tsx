import React from 'react'
import { ThemeProvider } from 'styled-components/macro'
import { BrowserRouter as Router } from 'react-router-dom'

import 'rpg-awesome/css/rpg-awesome.min.css'
import 'material-icons/iconfont/filled.css'
import 'material-icons/iconfont/outlined.css'

import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/300-italic.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/400-italic.css'
import '@fontsource/open-sans/600.css'
import '@fontsource/open-sans/600-italic.css'
import '@fontsource/open-sans/700.css'
import '@fontsource/open-sans/700-italic.css'

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

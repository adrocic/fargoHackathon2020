import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { CSSReset, ThemeProvider } from '@chakra-ui/core'

import customTheme from './theme'
import Home from './Views/Home'
import Map from './Views/Map'

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App

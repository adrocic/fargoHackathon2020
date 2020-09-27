import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { CSSReset, ThemeProvider } from '@chakra-ui/core'

import customTheme from './theme'
import Home from './Views/Home'
import Map from './Views/Map'
import Nav from './Components/Nav'
import Profile from './Views/Profile'
import Explore from './Views/Explore'

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route to="/explore">
            <Explore />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { CSSReset, ThemeProvider } from '@chakra-ui/core'

import Home from './Views/Home'

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <CSSReset />
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  )
}

export default App

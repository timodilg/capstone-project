import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import Todo from './pages/Todo'
import Timer from './pages/Timer'
import Settings from './pages/Settings'
import Navigation from './Navigation'

export default function App() {
  return (
    <Router>
      <AppGrid>
        <Switch>
          <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/timer">
            <Timer />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
        <Navigation />
      </AppGrid>
    </Router>
  )
}

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: auto 48px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
`

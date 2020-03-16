import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components/macro'
import Todo from './pages/Todo'
import Timer from './pages/Timer'
import Settings from './pages/Settings'
import Navigation from './Navigation'

export default function App() {
  const [name, setName] = useState('')
  const [interval, setInterval] = useState('25')
  return (
    <Router>
      <AppGrid>
        <Switch>
          <Route path="/todo">
            <Todo name={name} interval={interval} />
          </Route>
          <Route path="/timer">
            <Timer interval={interval} />
          </Route>
          <Route path="/settings">
            <Settings
              setName={setName}
              name={name}
              interval={interval}
              setInterval={setInterval}
            />
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
  margin: 0 auto;
  max-width: 400px;
  height: 100vh;
  font-family: 'Josefin Sans', sans-serif;
}
`

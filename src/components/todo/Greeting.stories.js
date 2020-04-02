import React from 'react'
import Greeting from './Greeting'
import { BrowserRouter as Router, Link } from 'react-router-dom'

export default {
  title: 'Todo/Greeting',
  component: Greeting,
}

const defaultName = 'Timo'

export const DefaultGreeting = () => {
  return (
    <Router>
      <div
        style={{
          display: 'grid',
          width: 280,
          padding: 10,
        }}
      >
        <Greeting name={defaultName} />
      </div>
    </Router>
  )
}

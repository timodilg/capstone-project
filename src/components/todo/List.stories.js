import React from 'react'
import List from './List'
import { BrowserRouter as Router, Link } from 'react-router-dom'

export default {
  title: 'List',
  component: List,
}

const defaultTodos = [
  {
    name: 'Create stories for storybook',
    done: false,
    id: 1,
  },
  {
    name: 'Go running',
    done: false,
    id: 2,
  },
]

export const DefaultList = () => {
  return (
    <Router>
      <div
        style={{
          display: 'grid',
          width: 283,
          height: 250,
          padding: 10,
        }}
      >
        <List todos={defaultTodos} />
      </div>
    </Router>
  )
}

import React from 'react'
import TimerFocusTask from './TimerFocusTask'
import { BrowserRouter as Router, Link } from 'react-router-dom'

export default {
  title: 'TimerFocusTask',
  component: TimerFocusTask,
}

const defaultTodo = {
  name: 'Read react article',
  id: 1,
}

export const DefaultTimerFocusTask = () => {
  return (
    <Router>
      <TimerFocusTask currentTodo={defaultTodo} />
    </Router>
  )
}

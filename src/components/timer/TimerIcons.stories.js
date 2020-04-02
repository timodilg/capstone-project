import React from 'react'
import TimerIcons from './TimerIcons'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default {
  title: 'Timer/Icons',
  component: TimerIcons,
}

const stateData = 7

export const DefaultTimerIcons = ({ soundState }) => {
  return (
    <Router>
      <div
        style={{
          display: 'grid',
          width: 280,
          padding: 10,
          background: 'black',
        }}
      >
        <TimerIcons soundState={stateData} />
      </div>
    </Router>
  )
}

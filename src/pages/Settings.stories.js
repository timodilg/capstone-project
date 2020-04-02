import React from 'react'
import Settings from './Settings'
import { BrowserRouter as Router, Link } from 'react-router-dom'

export default {
  title: 'Settings',
  component: Settings,
}

export const SettingsPage = () => {
  return (
    <Router>
      <Settings />
    </Router>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function SettingsNav() {
  const backIcon = require('../images/back.svg')

  return (
    <Link to="/timer">
      <img src={backIcon} alt="back to timer" width="20" />
    </Link>
  )
}

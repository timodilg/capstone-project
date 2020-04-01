import React from 'react'
import ButtonTimer from './ButtonTimer'
import { BrowserRouter as Router, Link } from 'react-router-dom'

export default {
  title: 'ButtonTimer',
  component: ButtonTimer,
}

export const DefaultButtonTimer = () => {
  return (
    <Router>
      <ButtonTimer interval={25} />
    </Router>
  )
}

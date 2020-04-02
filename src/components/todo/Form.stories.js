import React from 'react'
import Form from './Form'
import { BrowserRouter as Router, Link } from 'react-router-dom'

export default {
  title: 'Todo/Form',
  component: Form,
}

export const DefaultForm = () => {
  return (
    <Router>
      <Form />
    </Router>
  )
}

import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <NavStyling>
      <button>
        <Link to="/todo">ToDo</Link>
      </button>
      <button>
        <Link to="/timer">Timer</Link>
      </button>
      <button>
        <Link to="/settings">Settings</Link>
      </button>
    </NavStyling>
  )
}

const NavStyling = styled.nav`
  display: grid;
  grid-auto-flow: column;
  gap: 1px;
`

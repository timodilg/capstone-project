import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <NavStyling>
      <button>
        <NavLink to="/todo">ToDo</NavLink>
      </button>
      <button>
        <NavLink to="/timer">Timer</NavLink>
      </button>
      <button>
        <NavLink to="/settings">Settings</NavLink>
      </button>
    </NavStyling>
  )
}

const NavStyling = styled.nav`
  display: grid;
  grid-auto-flow: column;
  gap: 1px;
`

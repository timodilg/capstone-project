import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function SettingsNav() {
  const backIcon = require('../images/back.svg')

  return (
    <SettingsNavStyled>
      <Link to="/settings">
        <img src={settingsIcon} alt="settings" width="30" />
      </Link>
    </SettingsNavStyled>
  )
}

const TimerIconsStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 100px;
  align-items: flex-end;
`

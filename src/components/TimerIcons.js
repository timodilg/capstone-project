import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function TimerIcons() {
  const soundOnIcon = require('../images/sound-on.svg')
  const soundOffIcon = require('../images/sound-off.svg')
  const settingsIcon = require('../images/settings.svg')

  return (
    <TimerIconsStyled>
      <img src={soundOnIcon} alt="sound on" width="30" />
      <img src={soundOffIcon} alt="sound off" width="30" />
      <Link to="/settings">
        <img src={settingsIcon} alt="settings" width="30" />
      </Link>
    </TimerIconsStyled>
  )
}

const TimerIconsStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 100px;
  align-items: flex-end;
`

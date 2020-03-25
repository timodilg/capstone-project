import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function TimerIcons({ muteSound, unmuteSound, soundState }) {
  const soundOnIcon = require('../../images/sound-on-white-93.svg')
  const soundOffIcon = require('../../images/sound-off-white.svg')
  const settingsIcon = require('../../images/settings-white-90.svg')
  const todoIcon = require('../../images/todolist-white-75.svg')

  return (
    <TimerIconsStyled>
      <Link to="/todo">
        <img src={todoIcon} alt="todolist" width="30" />
      </Link>
      {soundState === 7 ? (
        <img src={soundOnIcon} alt="sound on" width="30" onClick={muteSound} />
      ) : (
        <img
          src={soundOffIcon}
          alt="sound off"
          width="30"
          onClick={unmuteSound}
        />
      )}

      <Link to="/settings">
        <img src={settingsIcon} alt="settings" width="30" />
      </Link>
    </TimerIconsStyled>
  )
}

const TimerIconsStyled = styled.div`
  padding-top: 70px;
  img {
    padding: 50px 20px 0;
  }
`

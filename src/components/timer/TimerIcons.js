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
        <img src={todoIcon} alt="todolist" name="todoIcon" />
      </Link>
      {soundState === 7 ? (
        <img
          src={soundOnIcon}
          alt="sound on"
          name="soundOnIcon"
          onClick={muteSound}
        />
      ) : (
        <img
          src={soundOffIcon}
          alt="sound off"
          name="soundOffIcon"
          onClick={unmuteSound}
        />
      )}

      <Link to="/settings">
        <img src={settingsIcon} alt="settings" name="settingsIcon" />
      </Link>
    </TimerIconsStyled>
  )
}

const TimerIconsStyled = styled.div`
  padding-top: 70px;
  img {
    padding: 50px 20px 0;
    margin: 0 8px;
    width: 25px;
  }
`

import React from 'react'
import styled from 'styled-components/macro'

export default function TimerFocusTask() {
  return (
    <TimerFocusTaskStyled>
      <span>
        <strong>FOCUS:</strong> Hemden bügeln
      </span>
    </TimerFocusTaskStyled>
  )
}

const TimerFocusTaskStyled = styled.li`
  border: 1px solid rgb(207, 207, 207);
  border-radius: 5px;
  height: 56px;
  line-height: 56px;
  padding-left: 15px;
  list-style: none;
  padding-right: 10px;
  /* display: flex;
  flex-grow: 1; */
`

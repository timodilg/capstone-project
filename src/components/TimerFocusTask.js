import React from 'react'
import styled from 'styled-components/macro'

export default function TimerFocusTask() {
  return (
    <TimerFocusTaskStyled>
      <input type="checkbox" />
      <span>Hemden bügeln</span>
    </TimerFocusTaskStyled>
  )
}

const TimerFocusTaskStyled = styled.li`
  border-radius: 5px;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.3);
  height: 56px;
  line-height: 60px;
  padding-left: 15px;
  list-style: none;
  background: white;
  text-align: left;
  font-size: 20px;
  width: 280px;
  margin: 0 auto;

  span {
    margin-left: 10px;
  }
`

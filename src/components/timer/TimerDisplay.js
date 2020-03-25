import React from 'react'
import styled from 'styled-components/macro'

export default function TimerDisplay({
  currentTime,
  currentBreakTime,
  timerState,
}) {
  const leftZeroNumber = value => {
    if (value < 10) return `0${value}`

    return `${value}`
  }

  return (
    <TimerStyled>
      {timerState === 0 ||
      timerState === 1 ||
      timerState === 2 ||
      timerState === 5 ? (
        <h2>
          {leftZeroNumber(currentTime.get('minutes'))}:
          {leftZeroNumber(currentTime.get('seconds'))}
        </h2>
      ) : (
        <>
          <h2>
            {leftZeroNumber(currentBreakTime.get('minutes'))}:
            {leftZeroNumber(currentBreakTime.get('seconds'))}
          </h2>
          <p>Take a break!</p>
        </>
      )}
    </TimerStyled>
  )
}

const TimerStyled = styled.div`
  font-size: 2.5rem;
  color: white;
  font-family: 'Roboto', sans-serif;
  height: 250px;
  display: grid;
  grid-template-rows: 30% 40% 15% 15%;

  h2 {
    align-self: center;
    grid-row: 2;
  }
  p {
    font-size: 22px;
    grid-row: 3;
    align-self: center;
  }
`

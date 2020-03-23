import React from 'react'
import styled from 'styled-components/macro'

export default function TimerDisplay({ currentTime }) {
  const leftZeroNumber = value => {
    if (value < 10) return `0${value}`

    return `${value}`
  }

  return (
    <TimerStyled>
      <h2>
        {leftZeroNumber(currentTime.get('minutes'))}:
        {leftZeroNumber(currentTime.get('seconds'))}
      </h2>
    </TimerStyled>
  )
}

const TimerStyled = styled.div`
  font-size: 2.5rem;
  padding-top: 40px;
  color: white;
  font-family: 'Roboto', sans-serif;
`

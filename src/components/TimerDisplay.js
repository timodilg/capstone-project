import React from 'react'
import styled from 'styled-components/macro'

const leftZeroNumber = value => {
  if (value < 10) return `0${value}`

  return `${value}`
}

const TimerDisplay = props => (
  <TimerStyled>
    <h2>
      {leftZeroNumber(props.currentTime.get('minutes'))}:
      {leftZeroNumber(props.currentTime.get('seconds'))}
    </h2>
  </TimerStyled>
)

const TimerStyled = styled.div`
  font-size: 3.5rem;
`

export default TimerDisplay

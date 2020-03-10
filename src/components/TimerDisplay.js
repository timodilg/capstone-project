import React from 'react'

const leftZeroNumber = value => {
  if (value < 10) return `0${value}`

  return `${value}`
}

const TimerDisplay = props => (
  <div>
    <h2>
      {leftZeroNumber(props.currentTime.get('minutes'))}:
      {leftZeroNumber(props.currentTime.get('seconds'))}
    </h2>
  </div>
)

export default TimerDisplay

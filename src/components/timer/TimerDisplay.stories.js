import React from 'react'
import TimerDisplay from './TimerDisplay'
import moment from 'moment'

export default {
  title: 'Timer/Display',
  component: TimerDisplay,
}

const defaultCurrentTime = moment.duration(Number(25), 'minutes')
const defaultCurrentBreakTime = moment.duration(Number(5), 'minutes')
const defaultStateData = 0

export const DefaultTimerDisplay = () => {
  return (
    <div
      style={{
        display: 'grid',
        width: 280,
        padding: 10,
        background: 'black',
      }}
    >
      <TimerDisplay
        currentTime={defaultCurrentTime}
        currentBreakTime={defaultCurrentBreakTime}
        timerState={defaultStateData}
      />
    </div>
  )
}

import React from 'react'
import * as timerStates from './timerStates'

const leftPad = val => {
  if (val < 10) return `0${val}`

  return `${val}`
}

const TimerDisplay = props => (
  <span>
    <div>
      {props.timerState === timerStates.COMPLETE && (
        <iframe
          className="center-block youtube-responsive-width"
          height="315"
          src="https://www.youtube.com/embed/nrAgK0S9hx4?autoplay=1&start=104&controls=0&showinfo=0"
        ></iframe>
      )}
    </div>
    <div>
      <h2>
        {leftPad(this.state.currentTime.get('minutes'))}:
        {leftPad(this.state.currentTime.get('seconds'))}
      </h2>
    </div>
  </span>
)

export default TimerDisplay

// xx < 10 ? '0'xx : xx

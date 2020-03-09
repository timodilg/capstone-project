import React, { Component } from 'react'
import styled from 'styled-components/macro'
import moment from 'moment'
import * as timerStates from '../../timerStates'

class Timer extends Component {
  constructor() {
    super()

    this.state = {
      currentTime: moment.duration(25, 'minutes'),
      baseTime: moment.duration(25, 'minutes'),
      timerState: timerStates.NOT_SET,
      timer: null,
    }

    this.setBaseTime = this.setBaseTime.bind(this)
    this.startTimer = this.startTimer.bind(this)
    this.reduceTimer = this.reduceTimer.bind(this)
  }

  setBaseTime(newBaseTime) {
    this.setState({
      baseTime: newBaseTime,
      currentTime: newBaseTime,
    })
  }

  startTimer() {
    this.setState({
      timerState: timerStates.RUNNING,
      timer: setInterval(this.reduceTimer, 1000),
    })
  }

  reduceTimer() {
    const newTime = moment.duration(this.state.currentTime())
    newTime.subtract(1, 'second')

    this.setState({
      currentTime: newTime,
    })
  }

  render() {
    return (
      <TimerStyled>
        <h2>25:00</h2>
        <div>
          <button>Start</button>
          <button>Pause</button>
          <button>Stop</button>
        </div>
      </TimerStyled>
    )
  }
}

const TimerStyled = styled.div`
  margin: 200px auto;
  font-size: 20px;
  text-align: center;

  /* div {
    display: flex;
    justify-content: space-between;
  } */

  button {
    transform: scale(1.5);
  }
`
export default Timer

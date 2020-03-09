import React, { Component } from 'react'
import styled from 'styled-components/macro'
import moment from 'moment'

class Timer extends Component {
  constructor() {
    super()

    this.state = {
      currentTime: moment.duration(25, 'minutes'),
      baseTime: moment.duration(25, 'minutes'),
    }
  }

  startTimer() {
    this.setState({
      timerState: timerStates.RUNNING,
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

import React, { Component } from 'react'
import styled from 'styled-components/macro'
import moment from 'moment'
import * as timerStates from '../components/timerStates'
import TimerDisplay from '../components/TimerDisplay'
import Sound from '../components/Sound'
import TimerIcons from '../components/TimerIcons'
import TimerFocusTask from '../components/TimerFocusTask'

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
    this.stopTimer = this.stopTimer.bind(this)
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

  stopTimer() {
    if (this.state.timer) {
      clearInterval(this.state.timer)
    }

    this.setState({
      timerState: timerStates.NOT_SET,
      timer: null,
      currentTime: moment.duration(this.state.baseTime),
    })
  }

  reduceTimer() {
    const newTime = moment.duration(this.state.currentTime)
    newTime.subtract(1, 'second')

    this.setState({
      currentTime: newTime,
    })
  }

  completeTimer() {
    if (this.state.timer) {
      clearInterval(this.state.timer)
    }

    this.setState({
      timerState: timerStates.COMPLETE,
      timer: null,
    })
  }

  // playAudio() {
  //   const whitenoise = require('../sounds/whitenoise.mp3')
  //   return <audio src={whitenoise} autoPlay />
  // }

  render() {
    return (
      <TimerStyled>
        <TimerFocusTask />
        <TimerDisplay currentTime={this.state.currentTime} />
        <div>
          <button onClick={this.startTimer}>Start</button>
          <button onClick={this.stopTimer}>Stop</button>
        </div>
        <TimerIcons />
        <Sound soundOn={this.state.timerState === timerStates.RUNNING} />
      </TimerStyled>
    )
  }
}

const TimerStyled = styled.div`
  margin: 40px auto;
  font-size: 20px;
  text-align: center;
  align-items: center;
  display: grid;
  grid-template-rows: 20% 40% 20% 20%;
  width: 300px;

  button {
    font-family: 'Josefin Sans', sans-serif;
    width: 100px;
    height: 50px;
    background: #326f6f;
    font-size: 1.5rem;
  }
`

export default Timer

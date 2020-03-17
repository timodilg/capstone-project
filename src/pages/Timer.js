import React, { Component } from 'react'
import styled from 'styled-components/macro'
import moment from 'moment'
import * as timerStates from '../components/timerStates'
import TimerDisplay from '../components/TimerDisplay'
// import Sound from '../components/Sound'
import TimerIcons from '../components/TimerIcons'
import TimerFocusTask from '../components/TimerFocusTask'
import play from '../images/play.svg'
// import pause from '../images/pause.svg'
import stop from '../images/stop.svg'

class Timer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentTime: moment.duration(Number(this.props.interval), 'minutes'),
      baseTime: moment.duration(Number(this.props.interval), 'minutes'),
      timerState: timerStates.NOT_SET,
      timer: null,
      interval: Number(this.props.interval),
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
      <TimerBackground>
        <TimerStyled>
          <TimerFocusTask />
          <TimerDisplay currentTime={this.state.currentTime} />

          <div>
            {this.state.timer ? null : (
              <img src={play} alt="play button" onClick={this.startTimer} />
            )}

            {/* <img src={pause} height="50px" alt="pause button" /> */}

            {this.state.timer ? (
              <img src={stop} alt="stop button" onClick={this.stopTimer} />
            ) : null}
          </div>
          <TimerIcons />
          {/* <Sound soundOn={this.state.timerState === timerStates.RUNNING} /> */}
        </TimerStyled>
      </TimerBackground>
    )
  }
}

const TimerBackground = styled.div`
  background: linear-gradient(to bottom, #66ffcc -6%, #ffffff 108%);
`

const TimerStyled = styled.div`
  margin: 40px auto;
  font-size: 20px;
  text-align: center;
  align-items: center;
  display: grid;
  grid-template-rows: 20% 40% 20% 20%;
  width: 300px;

  div {
    img {
      height: 60px;
    }
  }
`

export default Timer

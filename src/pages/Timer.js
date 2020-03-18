import React, { Component } from 'react'
import styled from 'styled-components/macro'
import moment from 'moment'
import * as timerStates from '../components/timerStates'
import TimerDisplay from '../components/TimerDisplay'
// import Sound from '../components/Sound'
import TimerIcons from '../components/TimerIcons'
import TimerFocusTask from '../components/TimerFocusTask'
import play from '../images/play.svg'
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
          <section>
            <TimerDisplay currentTime={this.state.currentTime} />
          </section>

          <div>
            {this.state.timer ? null : (
              <img src={play} alt="play button" onClick={this.startTimer} />
            )}

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
  background: linear-gradient(to bottom, #33cccc 0%, #009999 100%);
`

const TimerStyled = styled.div`
  margin: 0 auto;
  text-align: center;
  align-items: center;
  display: grid;
  grid-template-rows: 20% 40% 10% 30%;
  /* width: 300px; */
  height: 100vh;

  section {
    border: 6px dotted rgba(255, 255, 255, 0.5);
    border-radius: 100%;
    margin: auto;
    height: 250px;
    width: 250px;
  }

  div {
    img {
      height: 80px;
      padding-top: 40px;
      color: white;
    }
  }
`

export default Timer

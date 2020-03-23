import React, { useState } from 'react'
import styled from 'styled-components/macro'
import moment from 'moment'
// import * as timerStates from '../components/timerStates'
import TimerDisplay from '../components/timer/TimerDisplay'
// import Sound from '../components/Sound'
import TimerIcons from '../components/timer/TimerIcons'
import TimerFocusTask from '../components/timer/TimerFocusTask'
import play from '../images/play.svg'
import stop from '../images/stop.svg'

export default function Timer({
  interval,
  currentTodo,
  setCurrentTodo,
  todos,
  setTodos,
  deleteTodo,
  onDelete,
}) {
  const [currentTime, setCurrentTime] = useState(
    moment.duration(Number(interval), 'minutes')
  )

  const [baseTime, setBaseTime] = useState(
    moment.duration(Number(interval), 'minutes')
  )
  // const [timerState, setTimerState] = useState(NOT_SET)
  const [timer, setTimer] = useState(null)

  function startTimer() {
    // setTimerState(RUNNING)
    setInterval(reduceTimer, 1000)
  }

  function stopTimer() {
    if (timer) {
      clearInterval(timer)
    }

    // setTimerState(NOT_SET)
    setTimer(null)
    setCurrentTime(moment.duration(baseTime))
  }

  function reduceTimer() {
    const newTime = moment.duration(Number(currentTime))
    newTime.subtract(1, 'second')

    setCurrentTime(newTime)
    console.log(newTime)

    //moment.duration(Number(interval), 'minutes')
  }

  function setTheBaseTime(newBaseTime) {
    setBaseTime(newBaseTime)
    setCurrentTime(newBaseTime)
  }

  function completeTimer() {
    if (timer) {
      clearInterval(timer)
    }

    // setTimerState(COMPLETE)
    setTimer(null)
  }

  return (
    <TimerBackground>
      <TimerStyled>
        <TimerFocusTask
          currentTodo={currentTodo}
          setCurrentTodo={setCurrentTodo}
          todos={todos}
          setTodos={setTodos}
          deleteTodo={deleteTodo}
          onDelete={onDelete}
          startTimer={startTimer}
        />
        <section>
          <TimerDisplay currentTime={currentTime} />
        </section>

        <div>
          {timer ? null : (
            <img src={play} alt="play button" onClick={startTimer} />
          )}

          {timer ? (
            <img src={stop} alt="stop button" onClick={stopTimer} />
          ) : null}
        </div>
        <TimerIcons />
        {/* <Sound soundOn={timerState === timerStates.RUNNING} /> */}
      </TimerStyled>
    </TimerBackground>
  )
}

// playAudio() {
//   const whitenoise = require('../sounds/whitenoise.mp3')
//   return <audio src={whitenoise} autoPlay />
// }

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
      height: 70px;
      padding-top: 50px;
      color: white;
    }
  }
`

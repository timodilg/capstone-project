import React, { useState, useEffect } from 'react'
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
  breakInterval,
  currentTodo,
  setCurrentTodo,
  todos,
  setTodos,
  deleteTodo,
  onDelete,
}) {
  const NOT_SET = 0
  const RUNNING = 1
  const COMPLETE = 2
  const BREAK_NOT_SET = 3
  const BREAK_RUNNING = 4

  const [timer, setTimer] = useState(null)
  const [timerState, setTimerState] = useState(NOT_SET)
  // useEffect(() => {
  //   console.log(timerState)
  // }, [timerState])

  const [currentTime, setCurrentTime] = useState(
    moment.duration(Number(interval), 'seconds')
  )
  const [currentBreakTime, setCurrentBreakTime] = useState(
    moment.duration(Number(breakInterval), 'seconds')
  )

  useEffect(() => {
    const interval = setInterval(() => {
      reduceTimer()
      console.log(timerState)
    }, 1000)
    return () => clearInterval(interval)
  }, [timerState, currentTime, currentBreakTime])

  function startTimer() {
    if (timerState === 0) {
      setTimerState(RUNNING)
    }
    if (timerState === 3) {
      setTimerState(BREAK_RUNNING)
    }
  }

  function stopTimer() {
    setTimerState(COMPLETE)
    // setCurrentTime(moment.duration(Number(interval), 'seconds'))

    breakTimer()
  }

  function breakTimer() {
    setTimerState(BREAK_NOT_SET)
  }

  function stopBreakTimer() {
    setTimerState(NOT_SET)
    setCurrentTime(moment.duration(Number(interval), 'seconds'))
    setCurrentBreakTime(moment.duration(Number(breakInterval), 'seconds'))
  }

  function reduceTimer() {
    if (timerState === 0 || timerState === 2 || timerState === 3) {
      return
    }
    if (timerState === 1) {
      const newTime = moment.duration(currentTime)
      newTime.subtract(1, 'second')
      newTime._milliseconds < 0 ? stopTimer() : setCurrentTime(newTime)
    }
    if (timerState === 4) {
      const newBreakTime = moment.duration(currentBreakTime)
      newBreakTime.subtract(1, 'second')
      newBreakTime._milliseconds < 0
        ? stopBreakTimer()
        : setCurrentBreakTime(newBreakTime)
    }
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
          <TimerDisplay
            currentTime={currentTime}
            currentBreakTime={currentBreakTime}
            timerState={timerState}
          />
        </section>

        <div>
          {timerState === 0 ? (
            <img src={play} alt="play button" onClick={startTimer} />
          ) : null}
          {timerState === 1 ? (
            <img src={stop} alt="stop button" onClick={stopTimer} />
          ) : null}
          {timerState === 3 ? (
            <button onClick={startTimer}>Pause starten</button>
          ) : null}
          {timerState === 4 ? (
            <button onClick={stopBreakTimer}>Pause beenden</button>
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
    button {
      width: 100px;
      height: 70px;
      background: white;
      margin-top: 50px;
    }
  }
`

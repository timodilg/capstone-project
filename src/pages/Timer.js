import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import moment from 'moment'
import TimerDisplay from '../components/timer/TimerDisplay'
import Sound from '../components/sound/Sound'
import SoundTaskComplete from '../components/sound/SoundTaskComplete'
import TimerIcons from '../components/timer/TimerIcons'
import TimerFocusTask from '../components/timer/TimerFocusTask'
import play from '../images/play.svg'
import stop from '../images/stop.svg'
import finish from '../images/finish.svg'
import coffeeBreak from '../images/coffee-break.svg'

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
  const PAUSE = 5

  const LOUD = 7
  const MUTE = 8

  const [timerState, setTimerState] = useState(NOT_SET)

  const [currentTime, setCurrentTime] = useState(
    moment.duration(Number(interval), 'minutes')
  )
  const [currentBreakTime, setCurrentBreakTime] = useState(
    moment.duration(Number(breakInterval), 'minutes')
  )

  const [soundState, setSoundState] = useState(LOUD)

  useEffect(() => {
    const interval = setInterval(() => {
      reduceTimer()
    }, 1000)
    return () => clearInterval(interval)
  }, [timerState, currentTime, currentBreakTime])

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
    
          {timerState === 0 && (
            <img src={play} alt="play button" name="playButton" onClick={startTimer} />
          )}
          {timerState === 1 && (
            <img src={stop} alt="stop button"  name="stopButton" onClick={pauseTimer} />
          )}
          {timerState === 3 && (
            <>
              <img src={coffeeBreak} alt="break button" name="breakButton" onClick={startTimer} />
            </>
          )}
          {timerState === 4 && (
            <img src={stop} alt="stop button" name="stopButton" onClick={stopBreakTimer} />
          )}
          {timerState === 5 && (
            <>
              <img src={play} alt="play button" name="playButton" onClick={resumeTimer} />
              <img src={finish} alt="finish button" name="finishButton" onClick={stopTimer} />
            </>
          )}

        </div>
        <TimerIcons
          muteSound={muteSound}
          unmuteSound={unmuteSound}
          soundState={soundState}
        />

        {timerState === 1 && soundState === 7 && <Sound />}
        {timerState === 3 && soundState === 7 && <SoundTaskComplete />}

      </TimerStyled>
    </TimerBackground>
  )

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
    breakTimer()
  }

  function pauseTimer() {
    setTimerState(PAUSE)
  }

  function resumeTimer() {
    setTimerState(RUNNING)
  }

  function breakTimer() {
    setTimerState(BREAK_NOT_SET)
  }

  function stopBreakTimer() {
    setTimerState(NOT_SET)
    setCurrentTime(moment.duration(Number(interval), 'minutes'))
    setCurrentBreakTime(moment.duration(Number(breakInterval), 'minutes'))
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

  function muteSound() {
    setSoundState(MUTE)
  }

  function unmuteSound() {
    setSoundState(LOUD)
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
      height: 60px;
      padding: 50px 10px 0 10px;
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

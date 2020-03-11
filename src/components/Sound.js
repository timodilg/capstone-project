import React from 'react'
// import * as timerStates from './timerStates'

export default function Sound() {
  const whitenoise = require('../sounds/whitenoise.mp3')

  return <audio src={whitenoise} autoPlay />
}

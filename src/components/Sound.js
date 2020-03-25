import React from 'react'

export default function Sound() {
  const whitenoise = require('../sounds/whitenoise.mp3')

  return <audio src={whitenoise} autoPlay loop />
}

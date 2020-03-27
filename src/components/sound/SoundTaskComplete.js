import React from 'react'

export default function SoundTaskComplete() {
  const gong = require('../../sounds/gong.mp3')

  return <audio src={gong} autoPlay />
}

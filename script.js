import {
  btnPlay,
  btnPause,
  btnStop,
  btnSetTime,
  btnSoundOff,
  btnSoundOn,
  minutesDisplay,
  secondsDisplay
} from './src/modules/elements.js'
import Events from './src/factories/events.js'
import Sounds from './src/factories/sounds.js'
import Controls from './src/factories/controls.js'
import Timer from './src/factories/timer.js'

const Time = {
  minutes: '05',
  seconds: '00',
  idCountdown: null,
}

const sounds = Sounds({
  btnSoundOff,
  btnSoundOn
})

const controls = Controls({
  btnPlay,
  btnPause,
  btnStop,
  btnSetTime
})

const timer = Timer({
  Time,
  minutesDisplay,
  secondsDisplay,
  toggleBetweenPlayOrPause: controls.toggleBetweenPlayOrPause,
  sounds
})

Events({
  Time,
  sounds,
  timer
})

export function play() {
  controls.toggleBetweenPlayOrPause()
  timer.countdown()
}

export function pause() {
  controls.toggleBetweenPlayOrPause()
  clearTimeout(Time.idCountdown)
}
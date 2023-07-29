import {
  btnPlay,
  btnPause,
  btnStop,
  btnTimeEdit,
  btnMute,
  btnUnmute,
  minutesDisplay,
  secondsDisplay
} from './modules/elements.js'
import Events from './factories/events.js'
import Sounds from './factories/sounds.js'
import Controls from './factories/controls.js'
import Timer from './factories/timer.js'

const Time = {
  minutes: '05',
  seconds: '00',
  idCountdown: null,
}

const sounds = Sounds({
  btnMute,
  btnUnmute
})

const controls = Controls({
  btnPlay,
  btnPause,
  btnStop,
  btnTimeEdit
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
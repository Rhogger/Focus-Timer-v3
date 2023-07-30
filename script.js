import {
  appState,
  btnSoundOff,
  btnSoundOn,
  minutesDisplay,
  secondsDisplay
} from './src/modules/elements.js'
import Events from './src/factories/events.js'
import Sounds from './src/factories/sounds.js'
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

const timer = Timer({
  appState,
  Time,
  minutesDisplay,
  secondsDisplay,
  sounds
})

Events({
  Time,
  sounds,
  timer
})

export function play() {
  appState.classList.add('running')
  timer.countdown()
}

export function pause() {
  appState.classList.remove('running')
  clearTimeout(Time.idCountdown)
}
import {
  appState,
  minutesDisplay,
  secondsDisplay
} from './src/modules/elements.js'
import state from './src/modules/state.js'
import * as events from './src/modules/events.js'
import Sounds from './src/factories/sounds.js'
import Timer from './src/factories/timer.js'

export let darkMode = true

export const time = {
  minutes: 25,
  seconds: 0,
  idCountdown: null,
}

export const sounds = Sounds()

export const timer = Timer({
  sounds,
  appState,
  time,
  minutesDisplay,
  secondsDisplay,
  sounds,
  state,
})

export function start(minutes, seconds) {
  time.minutes = minutes
  time.seconds = seconds

  timer.updateDisplay()

  events.registerControls()
}

start(25, 0)

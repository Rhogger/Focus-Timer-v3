import {
  appState,
  controls,
  theme,
  minutesDisplay,
  secondsDisplay
} from './src/modules/elements.js'
import state from './src/modules/state.js'
import Events from './src/factories/events.js'
import Sounds from './src/factories/sounds.js'
import Timer from './src/factories/timer.js'
import Actions from './src/modules/actions.js'

let darkMode = true

export const time = {
  minutes: 25,
  seconds: 0,
  idCountdown: null,
}

export const sounds = Sounds()

export const timer = Timer({
  appState,
  time,
  minutesDisplay,
  secondsDisplay,
  sounds
})

const actions = Actions({
  state,
  sounds,
  timer,
  time,
  appState,
  darkMode
})

Events({
  controls,
  actions,
  theme
})


import state from "./state.js"
import { sounds, timer, time } from "../../script.js"
import { appState, minutesDisplay } from "./elements.js"

function toggleRunning() {
  state.isRunning = appState.classList.toggle('running')

  if (state.isRunning) {
    timer.countdown()
  } else {
    clearTimeout(time.idCountdown)
  }

  sounds.buttonPress()
}

function setTimer() {
  minutesDisplay.setAttribute('contenteditable', true)
  minutesDisplay.focus()
}

function resetTimer() {
  state.isRunning = false
  appState.classList.toggle('running')
  clearTimeout(time.idCountdown)
  timer.updateDisplay()
  sounds.buttonPress()
}

function toggleMusic() {
  state.isMuted = appState.classList.toggle('music-on')

  if (state.isMuted) {
    sounds.backgroundSoundOn()
  } else {
    sounds.backgroundSoundOff()
  }
}

export {
  toggleRunning,
  toggleMusic,
  setTimer,
  resetTimer,
}
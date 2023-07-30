import * as actions from './actions.js'
import state from "./state.js"
import { appState, controls, minutesDisplay, theme } from './elements.js'
import { time, timer } from '../../script.js'

export function registerControls() {
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action

    if (typeof actions[action] != 'function') return

    actions[action]()
  })


  theme.addEventListener('click', (event) => {
    const mode = state.isDarkTheme ? 'light' : 'dark'

    event.currentTarget.querySelector('span').textContent = `${mode} mode ativado`

    state.isDarkTheme = !state.isDarkTheme
    appState.classList.toggle('light')
  })


  minutesDisplay.addEventListener('focus', () => {
    minutesDisplay.textContent = ''
  })

  minutesDisplay.onkeypress = (event) => /\d/.test(event.key) && minutesDisplay.textContent.length < 2

  minutesDisplay.addEventListener('blur', (event) => {
    let hour = event.currentTarget.textContent
    hour = hour > 60 ? 60 : hour

    time.minutes = hour
    time.seconds = 0

    timer.updateDisplay()
    minutesDisplay.removeAttribute('contenteditable')
  })
}
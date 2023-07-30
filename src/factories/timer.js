import { resetTimer } from '../modules/actions.js'

export default function Timer({ sounds, time, minutesDisplay, secondsDisplay, state }) {
  // function countdown() {
  //   let minutes
  //   let seconds

  //   time.idCountdown = setTimeout(function () {
  //     minutes = Number(minutesDisplay.textContent)
  //     seconds = Number(secondsDisplay.textContent)

  //     if (seconds <= 0) {
  //       seconds = 60
  //       minutes--
  //     }

  //     if (minutes < 0) {
  //       editTimer()
  //     }

  //     seconds--

  //     updateDisplay(minutes, seconds)

  //     let isFinished = minutes <= 0 && seconds <= 0

  //     if (isFinished) {
  //       setTimeout(function () {
  //         resetDisplayCountdown()
  //         appState.classList.remove('running')
  //       }, 1000)

  //       sounds.finishTimer()
  //       return
  //     }

  //     countdown()
  //   }, 1000)
  // }

  function countdown() {
    time.idCountdown = setTimeout(function () {
      if (!state.isRunning) return

      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)

      if (seconds <= 0) {
        seconds = 60
        minutes--
      }

      if (minutes < 0) {
        resetTimer()
        sounds.finishTimer()
        return
      }

      seconds--

      updateDisplay(minutes, seconds)

      countdown()
    }, 1000)
  }

  function updateDisplay(minutes, seconds) {
    minutes = minutes ?? time.minutes
    seconds = seconds ?? time.seconds

    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')

    updateTitlePage(minutesDisplay.textContent, secondsDisplay.textContent)
  }

  function updateTitlePage(minutes, seconds) {
    document.title = `Timer - ${minutes}:${seconds}`
  }

  return {
    countdown,
    updateDisplay
  }
}
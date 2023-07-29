export default function Timer({ Time, minutesDisplay, secondsDisplay, toggleBetweenPlayOrPause, sounds }) {
  function countdown() {
    let minutes
    let seconds

    Time.idCountdown = setTimeout(function () {
      minutes = Number(minutesDisplay.textContent)
      seconds = Number(secondsDisplay.textContent)

      if (seconds <= 0) {
        seconds = 60
        minutes--
      }

      if (minutes < 0) {
        editTimer()
      }

      seconds--

      updateDisplay(minutes, seconds)

      let isFinished = minutes <= 0 && seconds <= 0

      if (isFinished) {
        setTimeout(function () {
          resetDisplayCountdown()
          toggleBetweenPlayOrPause()
        }, 1000)

        sounds.finishTimer()
        return
      }

      countdown()
    }, 1000)
  }

  function resetDisplayCountdown() {
    updateDisplay(Time.minutes, Time.seconds)
  }

  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
    updateTitlePage(minutesDisplay.textContent, secondsDisplay.textContent)
  }

  function updateTitlePage(minutes, seconds) {
    document.title = `Timer - ${minutes}:${seconds}`
  }

  function editTimer() {
    clearTimeout(Time.idCountdown)

    alert('Defina um tempo para o timer.')

    minutes = prompt('Quantos minutos deseja contar?').padStart(2, '0')

    Time.minutes = minutes

    seconds = 1
  }

  return {
    countdown,
    resetDisplayCountdown,
    updateDisplay
  }
}
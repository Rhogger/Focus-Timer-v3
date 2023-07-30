export default function ({
  state,
  sounds,
  timer,
  time,
  appState,
  darkMode
}) {
  function toggleRunning() {
    state.isRunning = appState.classList.toggle('running')

    if (state.isRunning) {
      play()
    } else {
      pause()
    }

    sounds.buttonPress()
  }

  function setTimer() {
    time.minutes = Number(prompt('Quantos minutos deseja contar?'))
    time.minutes = Math.trunc(Number(time.minutes))

    while (Number(time.minutes) < 0 || Number(time.minutes) > 60 || isNaN(Number(time.minutes))) {
      alert('Tempo inválido, digite entre 1 e 60 minutos')

      time.minutes = Number(prompt('Quantos minutos deseja contar?'))
    }

    timer.updateDisplay(time.minutes, 0)
  }

  function resetTimer() {
    state.isRunning = false
    appState.classList.toggle('running')
    pause()
    timer.resetDisplayCountdown()
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

  function toggleTheme() {
    console.log('Alo 2');
    state.isDarkTheme = appState.classList.toggle('light')

    const mode = darkMode ? 'light' : 'dark'

    event.currentTarget.querySelector('span').textContent = `${mode} mode ativado`

    darkMode = !darkMode

    console.log(darkMode);
  }

  function play() {
    timer.countdown()
  }

  function pause() {
    clearTimeout(time.idCountdown)
  }

  return {
    toggleRunning,
    toggleMusic,
    setTimer,
    resetTimer,
    toggleTheme
  }
}


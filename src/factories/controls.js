export default function Controls({ btnPlay, btnPause, btnStop, btnSetTime }) {
  function toggleBetweenPlayOrPause() {
    btnPlay.classList.toggle('hide')
    btnPause.classList.toggle('hide')
    toggleBetweenStopOrTimeEdit()
  }

  function toggleBetweenStopOrTimeEdit() {
    btnStop.classList.toggle('hide')
    btnSetTime.classList.toggle('hide')
  }

  return {
    toggleBetweenPlayOrPause,
    toggleBetweenStopOrTimeEdit
  }
}
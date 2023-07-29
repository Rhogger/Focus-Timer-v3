export default function Controls({ btnPlay, btnPause, btnStop, btnTimeEdit }) {
  function toggleBetweenPlayOrPause() {
    btnPlay.classList.toggle('hide')
    btnPause.classList.toggle('hide')
    toggleBetweenStopOrTimeEdit()
  }

  function toggleBetweenStopOrTimeEdit() {
    btnStop.classList.toggle('hide')
    btnTimeEdit.classList.toggle('hide')
  }

  return {
    toggleBetweenPlayOrPause,
    toggleBetweenStopOrTimeEdit
  }
}
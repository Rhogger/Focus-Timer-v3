export default function Sounds({ btnMute, btnUnmute }) {
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const finishTimerAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const backgroundAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")

  backgroundAudio.loop = true

  function buttonPress() {
    buttonPressAudio.play()
  }

  function finishTimer() {
    finishTimerAudio.play()
  }

  function backgroundUnmuted() {
    backgroundAudio.play()
  }

  function backgroundMuted() {
    backgroundAudio.pause()
  }

  function toggleBetweenMuteOrUnmute() {
    btnMute.classList.toggle('hide')
    btnUnmute.classList.toggle('hide')
  }

  return {
    toggleBetweenMuteOrUnmute,
    buttonPress,
    finishTimer,
    backgroundUnmuted,
    backgroundMuted
  }
}
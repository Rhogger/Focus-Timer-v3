import {
  btnPlay,
  btnPause,
  btnStop,
  btnSetTime,
  btnSoundOff,
  btnSoundOn
} from '../modules/elements.js'
import { play, pause } from '../../script.js'


export default function Events({
  Time,
  sounds,
  timer,
}) {

  btnPlay.addEventListener('click', () => {
    play()
    sounds.buttonPress()
  })

  btnPause.addEventListener('click', () => {
    pause()
    sounds.buttonPress()
  })

  btnStop.addEventListener('click', () => {
    pause()
    timer.resetDisplayCountdown()
    sounds.buttonPress()
  })

  btnSetTime.addEventListener('click', () => {
    Time.minutes = Number(prompt('Quantos minutos deseja contar?'))
    Time.minutes = Math.trunc(Number(Time.minutes))

    while (Number(Time.minutes) < 0 || Number(Time.minutes) > 60 || isNaN(Number(Time.minutes))) {
      alert('Tempo inválido, digite entre 1 e 60 minutos')

      Time.minutes = Number(prompt('Quantos minutos deseja contar?'))
    }

    timer.updateDisplay(Time.minutes, 0)
  })

  btnSoundOff.addEventListener('click', () => {
    sounds.toggleBetweenMuteOrUnmute()
    sounds.backgroundSoundOn()
  })
  btnSoundOn.addEventListener('click', () => {
    sounds.toggleBetweenMuteOrUnmute()
    sounds.backgroundSoundOff()
  })
}
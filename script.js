setInterval(fixTime, 1000)

const hrHand = document.querySelector('[data-hr-hand]')
const minHand = document.querySelector('[data-min-hand]')
const secHand = document.querySelector('[data-sec-hand]')

function fixTime() {
  const currentDate = new Date()
  const sec = currentDate.getSeconds() / 60
  const min = (sec + currentDate.getMinutes()) / 60
  const hour = (min + currentDate.getHours()) / 12
  fixMove(secHand, sec)
  fixMove(minHand, min)
  fixMove(hrHand, hour)
}

function fixMove(element, rotationRatio) {
  element.style.setProperty('--time', rotationRatio * 360)
}

fixTime()
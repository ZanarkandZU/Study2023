const second = document.getElementById("second")
const minute = document.getElementById("minute")
const hours = document.getElementById("hours")
const data = new Date()
let s = data.getSeconds()
let m = data.getMinutes()
let h = data.getHours()

function clock() {
  s--
  second.textContent = (s < 10) ? `0${s}` : s
  if (s <= 0) {
    s = 59
    m--
  }

  minute.textContent = (m < 10) ? `0${m}` : m
  if (m <= 0) {
    m = 59
    h--
  }

  hours.textContent = (h < 10) ? `0${h}` : h
  if (h <= 0) {
    second.textContent = "00"
    minute.textContent = "00"
    hours.textContent = "00"
    clearInterval(interval)
  }
}

const interval = setInterval(clock, 1000)
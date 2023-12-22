const detik = document.getElementById('detik');
const menit = document.getElementById('menit');
const jam = document.getElementById('jam');
const play = document.getElementById('play');
const reset = document.getElementById('reset');
const stop = document.getElementById('stop');
const select = document.getElementById('select');
const container = document.getElementById('container');
let second = 0;
let minute = 0;
let hours = 0;
let conten;

const stopWatch = () => {
  second++;
  if (second <= 9) {
    detik.innerHTML = `0${second}`;
  } else {
    detik.innerHTML = second;
  }

  if (second > 59) {
    second = 0;
    detik.innerHTML = `0${second}`;
    minute++;
    menit.innerHTML = `0${minute}`;
  }

  if (minute >= 10) {
    menit.innerHTML = minute;
  }
  if (minute > 59) {
    minute = 0;
    menit.innerHTML = `0${minute}`;
    hours++;
    jam.innerHTML = `0${hours}`;
  }

  if (hours >= 10) {
    jam.innerHTML = hours;
  }
};

play.onclick = function() {
  conten = setInterval(stopWatch);
}

stop.onclick = function() {
  clearInterval(conten);
}

reset.onclick = function() {
  second = 0;
  minute = 0;
  hours = 0;
  detik.innerHTML = '0' + second;
  menit.innerHTML = '0' + minute;
  jam.innerHTML = '0' + hours;
  clearInterval(conten);
}

select.onclick = function() {
  const h5 = document.createElement('h5');
  container.appendChild(h5);
  let conts = `${hours}:${minute}:${second}`;
  h5.append(conts);
  container.addEventListener('dblclick', function() {
    h5.remove();
  });
}
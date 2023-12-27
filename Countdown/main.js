const detik = document.getElementById('detik');
const menit = document.getElementById('menit');
const jam = document.getElementById('jam');
const play = document.getElementById('play');
const reset = document.getElementById('reset');
const stop = document.getElementById('stop');
const select = document.getElementById('select');
const container = document.getElementById('container');
let second = 59;
let minute = 59;
let hours = 3;
let conten;

const stopWatch = () => {
  second--;
  (second > 9) ? detik.innerHTML = second:
    detik.innerHTML = '0' + second;

  if (second === -1) {
    second = 59;
    detik.innerHTML = second;
    minute--;
    menit.innerHTML = minute;
  }

  (minute > 9) ? menit.innerHTML = minute:
    menit.innerHTML = '0' + minute;

  if (minute === -1) {
    minute = 59;
    menit.innerHTML = minute;
    hours--
    jam.innerHTML = hours;
  }

  (hours > 9) ? jam.innerHTML = hours:
    jam.innerHTML = '0' + hours;

  if (hours === 0 && minute === 0 && second === 0) {
    clearInterval(conten);
  }
};

play.onclick = function() {
  conten = setInterval(stopWatch, 1000);
}

stop.onclick = function() {
  clearInterval(conten);
}

reset.onclick = function() {
  second = 59;
  minute = 59;
  hours = 3;
  detik.innerHTML = second;
  menit.innerHTML = minute;
  jam.innerHTML = hours;
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
const inpt = document.getElementById('inpt');
const hed = document.querySelector('.hed');
const del = document.getElementById('del');
const ac = document.getElementById('clear');

function display(a) {
  if (hed.textContent.length < 80) {
    if (a === 'selec') {
      try {
        inpt.value = eval(inpt.value)
        hed.textContent = inpt.value;
      } catch (Error) {
        alert('anda memasukkan bilangan yang salah');
      }
    } else if (a === '*') {
      inpt.value += '*';
      hed.textContent += `×`;
    } else if (a === '/') {
      inpt.value += '/';
      hed.textContent += `÷`;
    } else {
      inpt.value += a;
      hed.textContent += a;
    }
  } else {
    alert('anda terlalubanyak memasukkan angka tolong lakukan 1/1');
  }
}

del.onclick = function() {
  inpt.value = inpt.value.slice(0, -1);
  hed.textContent = hed.textContent.slice(0, -1);
}

ac.onclick = function() {
  inpt.value = '';
  hed.textContent = '';
}
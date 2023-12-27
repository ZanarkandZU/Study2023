const plus = document.getElementById('btnPlus');
const min = document.getElementById('btnMin');
const wrap = document.getElementById('wrap');
const npt = document.getElementById('inpt');
let a = 0;

const btn = () => {
  wrap.innerHTML = npt.value;
  a = npt.value;
  a > 999 || a < -999 ? wrap.style.width = 'auto' : wrap.style.width = '40px';
  npt.value = '';
};

plus.onclick = () => {
  a++;
  wrap.innerHTML = a;
  if (a < 0) {
    a = 0;
    wrap.innerHTML = a;
  } else if (a > 999) {
    wrap.style.width = 'auto';
  }
};

min.onclick = () => {
  a--;
  wrap.innerHTML = a;
  if (a < 0) {
    a = 0;
    wrap.innerHTML = a;
    alert('sudah mencapai batasnya');
  } else if (a > 999) {
    wrap.style.width = '40px';
  }
};

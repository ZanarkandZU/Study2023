const card = document.querySelector('.card');
const conten = document.querySelector('.conten');
let init = 0;

card.onclick = () => {
  init++;
  if (init % 2 == 0) {
    conten.removeAttribute('id', 'conten');
    conten.classList.add('conten');
  } else {
    conten.classList.remove('conten');
    conten.setAttribute('id', 'conten');
  }
}
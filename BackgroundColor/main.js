const bdy = document.querySelector(".card");
const inp1 = document.getElementById("inp-A");
const inp2 = document.getElementById("inp-B");
const inp3 = document.getElementById("inp-C");
const btn = document.getElementById("btn");

let randm = 0,
  rand = 0,
  ran = 0;

inp1.addEventListener("input", () => {
  randm = inp1.value;
  bdy.style.backgroundColor = `rgb(${randm}, ${rand}, ${ran})`;
});

inp2.addEventListener("input", () => {
  rand = inp2.value;
  bdy.style.backgroundColor = `rgb(${randm}, ${rand}, ${ran})`;
});

inp3.addEventListener("input", () => {
  ran = inp3.value;
  bdy.style.backgroundColor = `rgb(${randm}, ${rand}, ${ran})`;
});

btn.onclick = () => {
  randm = Math.round(Math.random() * 1000 + 1);
  rand = Math.floor(Math.random() * 500 + 1);
  ran = Math.round(Math.random() * 1000 + 1);
  bdy.style.backgroundColor = `rgb(${randm}, ${rand}, ${ran})`;
};

const btn_bgC = () => {
  document.body.style.backgroundColor = `rgb(${randm}, ${rand}, ${ran})`;
};

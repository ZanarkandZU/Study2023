const vs = document.querySelector(".vs");
const sv = document.querySelector(".sv");
const total = document.querySelector(".total");
const btn = document.getElementById("btn");

const use = () => {
  if (vs.innerHTML == "batu" && sv.innerHTML == "gunting") {
    total.innerHTML = "kamu menang";
  } else if (vs.innerHTML == "kertas" && sv.innerHTML == "batu") {
    total.innerHTML = "kamu menang";
  } else if (vs.innerHTML == "gunting" && sv.innerHTML == "kertas") {
    total.innerHTML = "kamu menang";
  } else if (vs.innerHTML == sv.innerHTML) {
    total.innerHTML = "seri";
  } else {
    total.innerHTML = "kamu kalah";
  }
};

const user = a => {
  if (a === "gunting") {
    vs.innerHTML = "gunting";
  } else if (a === "batu") {
    vs.innerHTML = "batu";
  } else {
    vs.innerHTML = "kertas";
  }
};

btn.onclick = () => {
  if (vs.innerHTML == "") {
    alert("anda belum memilih apapun")
  } else {
  let brain = Math.round(Math.random() * 1000 + 3);
  if (brain < 400) {
    sv.innerHTML = "kertas";
  } else if (brain > 500) {
    sv.innerHTML = "gunting";
  } else {
    sv.innerHTML = "batu";
  }
  use();
  }
};

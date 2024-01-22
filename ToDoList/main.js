const inpt = document.getElementById("inpt");
const conten = document.querySelector(".conten");
const ul = document.createElement("ul");

const btn = () => {
  if (inpt.value === "") {
    alert("please isi terlebih dahulu di tempat yang sudah di sediakan")
  } else {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const span = document.createElement("span");
    conten.appendChild(ul)
    ul.appendChild(li);
    span.innerHTML = "\u00d7";
    a.innerHTML = inpt.value;
    li.append(a, span);
    inpt.value = "";
    a.onclick = () => {
      a.classList.toggle("a");
    }
    span.onclick = () => {
      li.remove();
    }
  }

}
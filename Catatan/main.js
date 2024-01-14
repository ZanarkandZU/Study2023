const btn = document.getElementById("btn");
const limit = document.getElementById("limit");
const text = document.getElementById("conten-text");

text.addEventListener("input", function () {
  let mathText = text.value.length;
  mathText >= 990
    ? (limit.style.color = "red")
    : (limit.style.color = "orange");
  limit.textContent = `${mathText}/1000`;
});

btn.onclick = () => {
  text.value != ""
    ? alert("pesan anda sedang di kirim ke WhatsApp")
    : alert("anda belum mengisi apapun");
};

btnc.onclick = () => {
  text.value = "";
};
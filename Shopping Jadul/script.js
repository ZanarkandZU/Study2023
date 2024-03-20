const ul = document.getElementById("wrapChild")
document.querySelector(".openShop").addEventListener("click", () => {
  ul.classList.toggle("wrapChild");
});

const hammertime = new Hammer(document.getElementById("wrapChild"));

hammertime.on('panright', function(eve) {
  const wrapChild = document.getElementById("wrapChild");
  const newX = wrapChild.offsetLeft + eve.deltaX;

  wrapChild.style.transform = `translateX(${newX}px)`;
});

hammertime.on('panend', function(eve) {
  const wrapChild = document.getElementById("wrapChild");
  const containerWidth = wrapChild.parentElement.offsetWidth;
  const wrapChildWidth = wrapChild.offsetWidth;
  const threshold = 1;

  if (Math.abs(eve.deltaX / containerWidth) > threshold) {
    wrapChild.classList.toggle("wrapChild");
  }

  wrapChild.style.transform = "";
});

const filterItems = (data) => {
  const items = document.querySelectorAll(".card");
  items.forEach((item) => {
    const itemName = item.querySelector(".heder").textContent.toLowerCase();
    item.style.display = itemName.includes(data.toLowerCase()) ? "flex" : "none";
  });
};

const createProducts = () => {
  for (const item of listData) {
    const productElement = document.createElement("div");
    productElement.classList.add("card");
    productElement.innerHTML = `
      <img src="" height="100px" width="100px">
      <h3 class="heder">${item.nama}</h3>
      <p>${item.harga.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</p>
      <div class="btn">
        <button class="btnCheck">check</button>
        <button class="btnShop">shop</button>
      </div>`;
    document.querySelector(".wrap").appendChild(productElement);
  }

  document.getElementById("inpt").addEventListener("input", (e) => filterItems(e.target.value));
  shoppingBtn();
};

const shoppingBtn = () => {

  const btnCheck = document.querySelectorAll('.btnCheck');

  btnCheck.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const item = listData[index];
      const lis = document.createElement('li');
      lis.classList.add('list');
      lis.innerHTML = `
        <img src="" height="50px" width="50px">
        <div class="infoItem">
          <h4>${item.nama}</h4>
          <p class='hargaItems'>${item.harga.toLocaleString("id-ID", { style: 'currency', currency: 'IDR' })}</p>
        </div>
        <div class="countItem">
          <button class="btnMinus">-</button>
          <h3 class="results">1</h3>
          <button class="btnPlus">+</button>
        </div>
        
        `;

      const ull = ul.querySelector(".ull")
      ull.appendChild(lis);
      btn.style.display = 'none';


      lis.querySelector('.btnPlus').addEventListener('click', function() {
        //total results items
        const result = lis.querySelector('.results');
        let values = Number(result.textContent);
        result.textContent = values + 1;
        //total results items selesai

        //total harga items
        const hargaItems = lis.querySelector(".hargaItems")
        let hargaResult = item.harga * (values + 1)
        hargaItems.textContent = hargaResult.toLocaleString("id-ID", { style: 'currency', currency: 'IDR' })
        //total harga items selesai 
      });

      lis.querySelector('.btnMinus').addEventListener('click', function() {
        //total results items
        const result = lis.querySelector('.results');
        let values = Number(result.textContent);
        result.textContent = values > 1 ? values - 1 : 1;
        //total results items selesai

        //total harga items
        const hargaItems = lis.querySelector(".hargaItems")
        let hargaResult = item.harga * (values - 1)
        hargaItems.textContent = hargaResult.toLocaleString("id-ID", { style: 'currency', currency: 'IDR' })
        //total harga items selesai
        if (values < 2) {
          lis.remove();
          btn.style.display = 'block';
        }
      });
    });
  });
  document.body.onclick = function() {
    const lengLis = document.querySelectorAll('.list');
    for (let i = 0; i < lengLis.length; i++) {
      lengLis[i].style.backgroundColor = i % 2 ? "lightblue" : 'skyblue';
    }
  }
};

let listData;

function fetchProducts() {
  fetch("./programs.json")
    .then(response => response.json())
    .then(data => {
      listData = data;
      createProducts();
    })
    .catch(error => console.error("Error fetching products:", error));
}

fetchProducts();
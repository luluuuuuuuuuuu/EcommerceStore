const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const showAlert = document.getElementById("showAlert");
const cantidadCarrito = document.getElementById("cantidadCarrito");
const categoryFilter = document.getElementById("categoryFilter");
const categorySelect = document.getElementById("category");

/*/SIN FILTRO 
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


const getProducts = async () => {

  const response = await fetch("data.json");
  const data = await response.json();
  console.log(data);

  data.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
      <img src="${product.img}">
      <h3>${product.nombre}</h3>
      <p class="price">$${product.precio} </p>
    `;
  
    shopContent.append(content);
  
    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";
  
    content.append(comprar);
  
    comprar.addEventListener("click", () => {
      const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
  
      if (repeat) {
        carrito.map((prod) => {
          if (prod.id === product.id) {
            prod.cantidad++;
          }
        });
      } else {
        carrito.push({
          id: product.id,
          img: product.img,
          nombre: product.nombre,
          precio: product.precio,
          cantidad: product.cantidad,
        });
        console.log(carrito);
        console.log(carrito.length);
        carritoCounter();
        saveLocal();
      }
    });
  });

};

//set item
const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

//get item
carrito = JSON.parse(localStorage.getItem("carrito")) || [];

getProducts();

*/
//CON FILTRO

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let products = [];

const getProducts = async () => {
  const response = await fetch("data.json");
  const data = await response.json();

  data.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
      <img src="${product.img}">
      <h3>${product.nombre}</h3>
      <p class="price">$${product.precio} </p>
    `;
  
    shopContent.append(content);
  
    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";
  
  
    content.append(comprar);
    console.log(comprar);

    comprar.addEventListener("click", () => {
      const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

      if (repeat) {
        carrito.map((prod) => {
          if (prod.id === product.id) {
            prod.cantidad++;
          }
        });
      }
      else {
        carrito.push({
          id: product.id,
          img: product.img,
          nombre: product.nombre,
          precio: product.precio,
          cantidad: product.cantidad,
        });
        carritoCounter();
        saveLocal();
      }
    });

    let like = document.createElement("button");
    like.innerText = "like";
    like.className = "like";

    content.append(like);
    console.log(like);


  });

};

const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

carrito = JSON.parse(localStorage.getItem("carrito")) || [];

fetch("data.json")
  .then(response => response.json())
  .then(data => {
    products = data;
    renderProducts(products);
  });

function renderProducts(products) {
  shopContent.innerHTML = "";
  
  const selectedCategory = categorySelect.value;
  
  const filteredProducts = selectedCategory === "all" ? products : products.filter(product => product.category === selectedCategory);
  
  filteredProducts.forEach(product => {
    const productCard = document.createElement("div");
    productCard.innerHTML = `
      <img src="${product.img}">
      <h3>${product.nombre}</h3>
      <p class="price">$${product.precio} </p>
    `;
    shopContent.appendChild(productCard);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";
  
  
    productCard.append(comprar);
    console.log(comprar);

    comprar.addEventListener("click", () => {
      const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
  
      if (repeat) {
        carrito.map((prod) => {
          if (prod.id === product.id) {
            prod.cantidad++;
          }
        });
      } else {
        carrito.push({
          id: product.id,
          img: product.img,
          nombre: product.nombre,
          precio: product.precio,
          cantidad: product.cantidad,
        });
        console.log(carrito);
        console.log(carrito.length);
        carritoCounter();
        saveLocal();
      }
    });

    let like = document.createElement("button");
    like.innerText = "add to wishlist";
    like.className = "like";

    productCard.appendChild(like);
    console.log(like);
    
  });
}

categorySelect.addEventListener("change", () => {
  renderProducts(products);
});







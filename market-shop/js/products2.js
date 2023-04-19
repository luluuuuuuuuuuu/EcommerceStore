const productos = [
    {
      id: 1,
      nombre: "Cargo 1",
      precio: 50,
      img: "cargo1.png",
      cantidad: 1,
      category: "cargo",
    },
    {
      id: 2,
      nombre: "Cargo 2",
      precio: 100,
      img: "cargo2.png",
      cantidad: 1,
      category: "cargo",
    },
    {
      id: 3,
      nombre: "Cargo 3",
      precio: 150,
      img: "cargo3.png",
      cantidad: 1,
      category: "cargo",
    },
    {
      id: 4,
      nombre: "Cargo 4",
      precio: 200,
      img: "cargo4.png",
      cantidad: 1,
      category: "cargo",
    },
    {
      id: 5,
      nombre: "Chandal 1",
      precio: 200,
      img: "chandal1.png",
      cantidad: 1,
      category: "chandal",
    },
    {
      id: 6,
      nombre: "Jogger 1",
      precio: 200,
      img: "jogger1.png",
      cantidad: 1,
      category: "jogger",
    },
    {
      id: 7,
      nombre: "Jogger 2",
      precio: 200,
      img: "jogger2.png",
      cantidad: 1,
      category: "jogger",
  
    },
    {
      id: 8,
      nombre: "Jogger 3",
      precio: 200,
      img: "jogger3.png",
      cantidad: 1,
      category: "jogger",
  
    },
    {
      id: 9,
      nombre: "Jogger 4",
      precio: 200,
      img: "jogger4.png",
      cantidad: 1,
      category: "jogger",
  
    },
  
  ];
  const shopContent = document.getElementById("shopContent");
  const filterButton = document.getElementById("filterButton");
  
  function createProductElements(products) {
    shopContent.innerHTML = ''; // clear existing elements
  
    productos.forEach(product => {
      const productDiv = document.createElement("div");
      productDiv.className = `product ${product.category}`;
  
      const productName = document.createElement("h3");
      productName.textContent = product.nombre;
      productDiv.appendChild(productName);
  
      const productPrice = document.createElement("span");
      productPrice.textContent = `$${product.precio}`;
      productDiv.appendChild(productPrice);
  
      const productImage = document.createElement("img");
      productImage.src = product.img;
      productDiv.appendChild(productImage);
  
      shopContent.appendChild(productDiv);
    });
  }
  
  filterButton.addEventListener('click', (event) => {
    const category = event.target.textContent.toLowerCase();
  
    if (category === 'show all') {
      createProductElements(productos);
    } else {
      const filteredProducts = productos.filter(product => product.category === category);
      createProductElements(filteredProducts);
    }
  });
  
  // create initial product elements
  createProduct
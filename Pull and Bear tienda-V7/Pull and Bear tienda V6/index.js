/*MENU*/
const menu = document.querySelector('.burger-icon');
const menuResponsive = document.querySelector('.navbar');
const cart = document.querySelector ('.cart-icon');
const cartResponsive = document.querySelector('.cart-section-2');

/*CART*/
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');
const productsList = document.querySelector('.products');
const empty_cart = document.querySelector('.shopping-cart-empty');
const valorTotal = document.querySelector('.total-pay');



/*MENU*/
menu.addEventListener('click', () => {
    menuResponsive.classList.toggle('hidden');
})

/*CART*/
cart.addEventListener('click', () => {
    cartResponsive.classList.toggle('cart-section-hidden-2');
})

console.log(productsList);
let allProducts  = []

productsList.addEventListener('click',e =>{
  if(e.target.classList.contains('buyNow')){
    console.log(e.target.parentElement);
    const product = e.target.parentElement;
    const parentProduct = product.parentElement;
    const parentFigure = parentProduct.children[0];
    const a = parentFigure.children[0];
    const img = a.firstElementChild.src;
   
    const title = parentProduct.children[1].textContent.trim();

    const price = parentProduct.children[2].textContent.trim();
    

    const infoProduct = {
      quantity: 1,
      title: title,
      price: price,
      imagen: img,
  }
    console.log(infoProduct);

    const exists = allProducts.some(product => product.title === infoProduct.title);

    if(exists){

      const products = allProducts.map(product =>{
          if(product.title === infoProduct.title){
              product.quantity++;
              return product;
          }else{
              return product;
          }
      })
      console.log('esta');
      
      allProducts = [...products];
  }
  else{
      console.log('no esta');
      allProducts = [...allProducts, infoProduct];
  }

  showHTML();

  console.log(allProducts);

  console.log(product.parentElement);
  
  console.log(img);

}


});

const showHTML = () =>{
/*
  if(allProducts.length==0){
    empty_car.style.display = 'block';
  }else{
    empty_car.style.display = 'none';
  */
    let total = 0; 
    let totalOfProducts = 0;
    rowProduct.innerHTML = '';
    allProducts.forEach(product =>{
      const productoCreado = document.createElement('div');
      productoCreado.classList.add('cart-product');
      productoCreado.innerHTML = `
      <figure>
        <img src="${product.imagen}" alt="" class="cart-image">
      </figure>
      <div class="product-info-cart">      
        <p class="product-title">${product.title}</p>
        <span class="product-price">${product.price}</span>
        <span class="product-quantity">${product.quantity}</span>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon_close">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
      `  
      rowProduct.append(productoCreado);
    });

}

/*FILTER*/
const filterButton = document.querySelector('#filter-button');
const products = document.querySelectorAll('.pants');

filterButton.addEventListener('click', (event) => {
  const category = event.target.textContent.toLowerCase();
  
  if (category === 'show all') {
    products.forEach(product => {
      product.style.display = 'block';
    });
  } else {
    products.forEach(product => {
      if (product.classList.contains(category)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  }
});

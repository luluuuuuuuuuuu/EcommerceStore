const menu = document.querySelector('.burger-icon');
const menuResponsive = document.querySelector('.navbar');
const cart = document.querySelector ('.cart-icon');
const cartResponsive = document.querySelector('.cart-section-2');

menu.addEventListener('click', () => {
    menuResponsive.classList.toggle('hidden');
})

cart.addEventListener('click', () => {
    cartResponsive.classList.toggle('cart-section-hidden-2');
})


/*
function filterObjects(c){
    var x, i;
    x =document.getElementsByClassName("pants");
    if (c=="all") c = "";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if(x[i].className.indexOf (c) > -1) addClass (x[i], "show")
    }
}

function addClass (element, name) {
    var i , arr1, arr2;
    arr1 = element.className.split("");
    arr2 = name.split("");
    for (i= 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function removeClass (element,name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i= 0; i < arr2.length; i++){
        while
    }

}*/

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

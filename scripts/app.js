// dropdown
const selectPrice = document.querySelector('.prices__select');
const selectedPrice = document.querySelector('.price__selected');
const arrPrice = document.querySelector('.price__arr');
const listPrice = document.querySelector('.prices__list');
const itemPrices = document.querySelectorAll('.prices__list-item');

selectPrice.addEventListener('click', () => {
  arrPrice.classList.toggle('price__arr--rotate');
  listPrice.classList.toggle('prices__list-open')
})

itemPrices.forEach(itemPrice => {
  itemPrice.addEventListener('click', () => {
    selectedPrice.innerText = itemPrice.innerText;
    arrPrice.classList.remove('price__arr--rotate');
    listPrice.classList.remove('prices__list-open');

    itemPrices.forEach(itemPrice => {
      itemPrice.classList.remove('active');
    })
    itemPrice.classList.add('active')
  })
})


// burger
const menuBtn = document.querySelector(".burger__menu"),
  submenu = document.querySelector(".menu");

function toggleMenu() {
  menuBtn.classList.toggle("active");
  submenu.classList.toggle("vis__submenu");
}
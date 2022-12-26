// const instruments = [{
//     id: 1,
//     img: 'https://static.dnipro-m.ua/cache/products/1754/catalog_origin_141546.jpg',
//     name: 'Молоток',
//     price: 150
// }, {
//     id: 2,
//     img: 'https://static.dnipro-m.ua/cache/products/5098/catalog_origin_195568.jpg',
//     name: 'Перфоратор',
//     price: 3000
// }, {
//     id: 3,
//     img: 'https://static.dnipro-m.ua/cache/products/2023/catalog_origin_200763.jpg',
//     name: 'Рівень',
//     price: 2000
// }]

// const container = document.querySelector('.js-container');

// function createMarkup(arr) {
//     const markup = arr.map(({ id, img, name, price }) => {
//         return `<li data-product="${id}">

//             <img src="${img}" alt="${name}" width="300">
//             <h2>${name}</h2>
//             <p>Price: ${price}</p>
//             <div>
//                 <button class="js-buy">Buy</button>
//                 <button class="js-favourite">Add to favourite</button>
//             </div>
//         </li>`
       
//     }).join("");

//     return markup;
// }

// container.insertAdjacentHTML("beforeend", createMarkup(instruments));  

// container.addEventListener("click", onClick);

// function onClick(evt) {
//     if (evt.target.classList.contains("js-buy")) {
//         const id = Number(evt.target.closest('li').dataset.product);
//         const currentProduct = instruments.find((instrument) => instrument.id === id);
//         console.log(currentProduct)
//     } else if (evt.target.classList.contains("js-favourite")) {
//         const id = Number(evt.target.closest('li').dataset.product);
//         const currentProduct = instruments.find((instrument) => instrument.id === id);
//         console.log(currentProduct)
//    }
// }
const divEl = document.querySelector(".content");
 let markup = "";
 for ( let i = 0; i < 9; i +=1){
markup +=`<div class="item"></div>`;
 }
divEl.insertAdjacentHTML("beforeend", markup);
divEl.addEventListener("click", onClick);
let pleyer ="X";
function onClick(evt) {
    if(!evt.target.textContent){
    evt.target.textContent = pleyer;
    pleyer = pleyer==="X" ? "O" : "X";
    }

}
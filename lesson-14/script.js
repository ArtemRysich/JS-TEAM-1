const cars = [{
    brand: 'Honda',
    model: 'Civic',
    price: 12000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU'
},
{
    brand: 'BMW',
    model: 'X5',
    price: 19000,
    img: 'https://i.infocar.ua/img/mats/11150/ins/1614846802162.jpg'
},
{
    brand: 'Audi',
    model: 'Q7',
    price: 40000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg'
}, {
    brand: 'BMW',
    model: '5 siries',
    price: 9000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU'
},
{
    brand: 'Audi',
    model: 'A6',
    price: 25000,
    img: 'https://i.gaw.to/vehicles/photos/40/28/402805-2022-audi-a6.jpg?640x400'
}, {
    brand: 'Honda',
    model: 'Accord',
    price: 20000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg'
}, {
    brand: 'Volvo',
    model: 'XC60',
    price: 7000,
    img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320'
},
{
    brand: 'Audi',
    model: 'RSQ8',
    price: 180000,
    img: 'https://static.apostrophe.ua/uploads/image/7a832f54750de46acc3269ef2e0d8b26.jpg'
},
]

const list = document.querySelector('.list');

function createMarkup(arr) {
   const result = arr.map(({brand, model, price, img})=> {
     
   return `<li>
      <img src="${img}" alt="${brand}" width = "300">
      <h2>${brand}</h2>
      <h2>${model}</h2>
      <p>${price}</p>
  </li>` 

    }).join("")
    list.innerHTML = result;
}
 createMarkup(cars);

//  const form = document.querySelector('.js-gallery');
// form.addEventListener('submit', onSubmit);

// function onSubmit (event) {
//     event.preventDefault();
//     const searchValue = event.target.elements.search.value.toLowerCase();
    
//     const filteredCars = cars.filter(({brand}) => brand.toLowerCase().includes(searchValue));   

//     createMarkup(filteredCars);
// }

// list.addEventListener('click',showImg);

// function showImg (event) {
//     if (event.target.nodeName !== 'IMG'){
//     return
// }
// const {src} = event.target;

// const instance = basicLightbox.create(`
// <img src="${src}" alt="car">
// `, {
// 	onShow: (instance) => {document.addEventListener("keydown", onEscape)},
	
// 	onClose: (instance) => {document.removeEventListener("keydown", onEscape)}
// })
// instance.show();
// function onEscape (event) {
//     if (event.code === 'Escape') {
//         instance.close();
//     }
// }
// }
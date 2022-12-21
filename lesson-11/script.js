// const div = document.querySelector(".js-one")
// const divId = document.querySelector("#qwe")
// console.log(div);
// console.log(divId)
// const divTeg = document.querySelector("div")
// console.log(divTeg)
// const div = document.querySelectorAll(".js-one");

// const divTwo = document.getElementsByClassName("js-one")
// const container = document.querySelector(".js-container");
// let markup = "";
// for(let i = 0; i < 5; i +=1){
//     markup += `<div class="js-one"></div>`
// }
// container.insertAdjacentHTML("beforeend", markup)

// console.log(divTwo)
// console.log(div)

// const div = document.createElement("div");
// const h2 = document.createElement("h2");
// const p = document.createElement("p");

// div.classList.add("js-one");
// div.append(h2, p);
// h2.textContent = "Hello world";
// p.textContent = "quarty";

// console.log(div);
// container.append(div);

const cars = [
  {
    model: "Honda",
    type: "Civic",
    price: 12000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
  },
  {
    model: "Audi",
    type: "Q7",
    price: 40000,
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
  },
  {
    model: "BMW",
    type: "5 siries",
    price: 9000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
  },
  {
    model: "Honda",
    type: "Accord",
    price: 20000,
    img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
  },
  {
    model: "Volvo",
    type: "XC60",
    price: 7000,
    img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
  },
];

const list = document.querySelector(".js-list");

// const item = cars
//   .map(
//     (obj) => `<li>
// <img src="${obj.img}" alt="${obj.model}" width='300'>
// <h2>${obj.model}</h2>
// <h3>${obj.type}</h3>
// <p>${obj.price}</p>
// </li>`
//   )
//   .join("");

// list.insertAdjacentHTML("beforeend", item);

// 2ий спосіб рішення

const item = cars.map((obj) => {
  const li = document.createElement("li");
  const img = document.createElement("img");
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  img.src = obj.img;
  img.alt = obj.model;
  img.style.width = "300px";
  h2.textContent = obj.model;
  h3.textContent = obj.type;
  p.textContent = obj.price;
  div.append(h2, h3);
  li.append(img, div, p);
  return li;
});
list.append(...item);
console.log(item);

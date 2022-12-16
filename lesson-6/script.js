// // 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати списoк імен учнів факультету
// // 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати кількість очків факультета
// // 3 Створити метод об'єкту який буде виводити ім'я факультету в якого більше очків

// const hogvarts = {
//   griffindor: [
//     {
//       name: "Harry",
//       points: 17,
//     },
//     {
//       name: "Hermiona",
//       points: 19,
//     },
//     {
//       name: "Ron",
//       points: 14,
//     },
//   ],
//   sliserin: [
//     {
//       name: "Draco",
//       points: 17,
//     },
//     {
//       name: "Goyl",
//       points: 14,
//     },
//     {
//       name: "Crabbe",
//       points: 5,
//     },
//   ],
//   getStudentList(facultet) {
//     const nameArr = [];
//     for (const { name } of this[facultet]) {
//       nameArr.push(name);
//     }
//     return nameArr;
//   },

//   getTotalpoints(facultet) {
//     let totalPoints = 0;
//     for (const { points } of this[facultet]) {
//       totalPoints += points;
//     }
//     return totalPoints;
//   },
//   getBest(){
//     const griffindorPoints = this.getTotalpoints("griffindor");
//     const sliserinPoints = this.getTotalpoints("sliserin");
//     if(griffindorPoints > sliserinPoints){
//         return "griffindor";
//     }else{
//         return "sliserin";
//     }
//   }
// };
// console.log(hogvarts.getBest())

// Створити функцію яка приймає 1 параметр масив продуктів і повертає мутований масив // Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати // а ті обє'кти в яких айді співпав видалити з масиву. // (Потрібно мутувати масив, створювати новий не потрібно) // const products = [{ // id: 'sku1', // qty: 1, // }, { // id: 'sku2', // qty: 2, // }, { // id: 'sku3', // qty: 3, // }, { // id: 'sku1', // qty: 6, // }, { // id: 'sku1', // qty: 8, // }, { // id: 'sku2', // qty: 19, // }, { // id: 'sku4', // qty: 1, // }]

// const products = [
//   { id: "sku1", qty: 1 },
//   { id: "sku2", qty: 2 },
//   { id: "sku3", qty: 3 },
//   { id: "sku1", qty: 6 },
//   { id: "sku1", qty: 8 },
//   { id: "sku2", qty: 19 },
//   { id: "sku4", qty: 1 },
// ];

// function formatObject(products) {
//   for (let i = 0; i < products.length; i += 1) {
//     console.log("Products i ", products[i]);
//     for (let j = i + 1; j < products.length; j += 1) {
//       console.log("Products j ", products[j]);
//       if (products[i].id === products[j].id) {
//         products[i].qty += products[j].qty;
//         products.splice(j, 1);
//         j -= 1;
//       }
//     }
//   }
// }
// console.log(formatObject(products));
// console.log(products);


// const cars = [{
//         car: "Honda",
//         type: "Civic",
//         price: 12000,
//     },
//     {
//         car: "Audi",
//         type: "Q7",
//         price: 40000,
//     },
//     {
//         car: "BMW",
//         type: "5 siries",
//         price: 9000,
/* const friends = [{ name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
    { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
    { name: "Alice", books: ["War and peace", "Romeo and Juliet"]},
    { name: "Oleksii", books: ["Bible","War and peace","Harry Potter",  "Romeo and Juliet"], age: 26},
]
 
// const result = friends.reduce((acc, itemElem, ind, arr) => {
//   if(itemElem.hasOwnProperty("age")){
// acc += itemElem.age;
// }
// return acc;
// },0 )
// console.log(result)

const result = friends.reduce((acc, itemElem) => itemElem.hasOwnProperty("age") ? acc + itemElem.age : acc, 0)
console.log(result)
 */
const cars = [{
        car: "Honda",
        type: "Civic",
        price: 12000,
    },
    {
        car: "Audi",
        type: "Q7",
        price: 40000,
    },
    {
        car: "BMW",
        type: "5 siries",
        price: 9000,
    },
    {
        car: "Honda",
        type: "Accord",
        price: 20000,
    },
    {
        car: "Volvo",
        type: "XC60",
        price: 7000,
    },
];

/* const allCars = cars.reduce((acc, item) => {
    acc.push(item.car);
    return acc;
}, [])
 console.log(allCars) */

/* Цей метод викличе помилку через неявне повернення:
 const allCars = cars.reduce((acc, item) => acc.push(item.car), [])
 console.log(allCars) */

 / ///Створити функцію яка приймає марку авто, функція повертає в консоль кількість знайдених авто , марку авто, модель і вартість авто
// // // Повертає стрінгу з знайденими авто

// // // Кількість знайдених автомобілів 2:
// // // 1. Honda Accord, ціна 20000
// // // 2. Honda Civic, ціна 12000

// // // // Якщо не було знайдено жодного авто ми маємо вивести

// // // // Вибачте але за вашим пошуком жодного авто не було знайдено.

const searchCars = (carName) => {
    const result = cars.filter(({ car }) => car === carName);
    console.log(result)
    const resultMark = result.reduce((acc, elm, ind) => acc + `${ind + 1} ${elm.car} ${elm.type}, ціна ${elm.price}\n`,
        result.length ? `Кількість знайдених автомобілів ${result.length}\n` : 'Вибачте але за вашим пошуком жодного авто не було знайдено')  
    console.log(resultMark)
}
searchCars("Audi")
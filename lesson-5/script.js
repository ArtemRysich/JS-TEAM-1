// Створити об'єкт свого домашнього улюбленця, під час створення об'єкту потрібно лише створити ключ ім'я та
// присвоїти значення усі інші ключі потрібно додати динамічно

// const favouritePet = {
//     name: "Patty",

// }

// favouritePet.kindOfAnimal = "dog";
// favouritePet.ageOfAnimal = 2;
// favouritePet.favouriteToy = "bone";

// console.log(favouritePet);

// favouritePet.favouriteToy = "ball";

// for (const key in favouritePet) {
//     console.log(key);
//     console.log(favouritePet[key]);
// }

// const keys = Object.keys(favouritePet)
// console.log(keys);

// for (const key of keys) {
//       console.log(key)
//       console.log(favouritePet[key]);
// }

// const values = Object.values(favouritePet);
// console.log(values);

//  for (const value of values) {
//       console.log(value)

//  }

// const entries = Object.entries(favouritePet)
//     console.log(entries);

// const obj = {
//   den: {
//     name: "Den",
//     salary: 1200,
//     month: 2,
//   },
//   mark: {
//     name: "Mark",
//     salary: 1300,
//     month: 7,
//   },
// }
// console.log(obj);

// const entries = Object.entries(obj)
//     console.log(entries);

// delete obj.mark;
// console.log(obj);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing

// const user = {
//     name: 'Olha',
//     city: 'Lviv',

// }

// Object.freeze(user)
// user.name = 'Yulia';
// console.log(user);

// Створити функцію яка буде приймати 2 параметра.
// 1 Масив студентів.
// 2 Мову програмування яку потрібно знайти.
// Функція повертає масив імен користувачів які вивчають цю мову.

// const students = [
//   {
//     name: `Lika`,
//     language: `html`,
//   },
//   {
//     name: `Anton`,
//     language: `css`,
//   },
//   {
//     name: `Andriy`,
//     language: `js`,
//   },
//   {
//     name: `Vova`,
//     language: `html`,
//   },
//   {
//     name: `Alina`,
//     language: `css`,
//   },
//   {
//     name: `Egor`,
//     language: `js`,
//   },
//   {
//     name: `Aleksandr`,
//     langunage: `html`,
//   },
//   {
//     name: `Taras`,
//     language: `css`,
//   },
//   {
//     name: `Ivan`,
//     language: `js`,
//   },
//   {
//     name: `Make`,
//     language: `html`,
//   },
// ];

// // Створити функцію яка буде приймати 2 параметра.

// function foo(arr, lang) {
//   const names = [];
//   for (const student of arr) {
//     if (lang === student.language) {
//       names.push(student.name);
//       //   console.log(student);
//       // return names;
//     }
//   }
//   return names;
// }
// foo(students, "js");
// console.log(foo(students, "js"));
// 1 Масив студентів.
// 2 Мову програмування яку потрібно знайти.
// Функція повертає масив імен користувачів які вивчають цю мову.

// -----------------------

// 1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є ця книга ("Harry Potter") \\\ "Anna, Oleksii"

// 2 Порахувати вік всіх юзерів у яких є ключ age.

// const friends = [
//   { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
//   { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
//   { name: "Alice", books: ["War and peace", "Romeo and Juliet"] },
//   {
//     name: "Oleksii",
//     books: ["Bible", "War and peace", "Harry Potter", "Romeo and Juliet"],
//     age: 26,
//   },
// ];

// function sumOfAges(arr) {
//   let sum = 0;
//   for (const elem of arr) {
//     if (elem.hasOwnProperty("age")) {
//       sum += elem.age;
//     }
//   }
//   return sum;
// }

// console.log(sumOfAges(friends));

// function getBook(arr, nameOfBook) {
//   const newArr = [];
//   for (const obj of arr) {
//     if (obj.books.includes(nameOfBook)) {
//       newArr.push(obj.name);
//     }
//   }
//   return newArr.join(", ");
// }

// console.log(getBook(friends, "Harry Potter"));



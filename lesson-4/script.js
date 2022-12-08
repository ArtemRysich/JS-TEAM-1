//Створіть функцію, яка приймає 1 параметр
//1 масив імен користувачів, які поставили лайки.
//Функція повертає меседж, як вказано у прикладах:
//Використовувати switch()

// /**
//  *
//  * @param {Array} users
//  */
//  function stringBuilder(users){
//      switch (users.length) {
//          case 0:
//              console.log("no one likes this");
//              break;
//          case 1:
//              console.log(`${users[0]} likes this`);
//              break;
//          case 2:
//              console.log(`${users[0]} and ${users[1]} likes this`);
//              break;
//          case 3:
//              console.log(`${users[0]}, ${users[1]} and ${users[2]} likes this`);
//              break;
//          default:
//              console.log(`${users[0]}, ${users[1]} and ${users.length-2} others like this`);

// }

// }

//  stringBuilder([])//"no one likes this";
// stringBuilder(["Peter"])//"Peter likes this";
//  stringBuilder(["Jacob", "Alex"])//"Jacob and Alex like this";
// stringBuilder(["Max", "John", "Mark"])//"Max, John and Mark like this";
//  stringBuilder(["Alex", "Jacob", "Mark", "Max", "Alex", "Jacob", "Mark", "Max"])//"Alex, Jacob and 2 others like this;

// https://habr.com/ru/company/ruvds/blog/599929/

// Cтворити функцію яка буде приймати 1 параметр та знаходити в масиві елементи що дублюються і потім ці елменти добавляти в новий масив
// 1 масив чисел (arr)

// const numbers = [1, 2, 3, 1, 1, 2, 17, 19];
// const dubl = [];
// //JS-doka
// /**
//  * для вирахування елеметів, що дублюються.
//  * @param {Array} arr
//  * @returns {Array} - масив елементів, які дублюються
//  */
//  function getCommonElements(arr) {
// for( let i=0; i <arr.length; i+=1){

//     if(arr.includes(arr[i], i+1)){
// dubl.push(arr[i]);
//     }
// }
// return dubl;
//  };
// console.log(getCommonElements(numbers));

//Створити функцію яка буде приймати 2 параметри:
//1 масив імен які вже зареєстровані. (users)
//2 рандомне ім'я. (name)
//Функція повертає меседж.
//Якщо юзер з таким ім'ям вже існує повертаємо меседж що потрібно обрати інше ім'я
//Якщо юзер з таким ім'ям не існує добавляємо його в масив та вказуємо що юзера додано успішно.

// const users = ['artem', 'anna', 'maks', 'vlad'];

/**
 *
 * @param {Array} users
 * @param {String} name
 * @returns {Array || String} - масив імен або error msg
 */

function createUser(users, name) {
  if (users.includes(name)) {
    return "Потрібно обрати інше імʼя";
  }
  users.push(name);
  return users;
}

console.log(createUser(["artem", "anna", "maks", "vlad"], "maks"));

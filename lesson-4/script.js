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

// /**
//  *
//  * @param {Array} users
//  * @param {String} name
//  * @returns {Array || String} - масив імен або error msg
//  */

// function createUser(users, name) {
//   if (users.includes(name)) {
//     return "Потрібно обрати інше імʼя";
//   }
//   users.push(name);
//   return users;
// }

// console.log(createUser(["artem", "anna", "maks", "vlad"], "maks"));

// let a = 12;
// if (true) {
//   let a = 15;
//   console.log(a);
// }

// console.log(a);

// let a = 12;
// if (true) {
//   let a = 15;
//   console.log(a);
// }

// console.log(a);

// let a = 12;
// if (true) {
//   a = 15;
//   console.log(a);
// }

// console.log(a);

// let a = 12;
// if (true) {
//   a = 15;
//   let a = 22;
//   console.log(a);
// }

// console.log(a);

// if (true) {
//   let a = 22;
//   console.log(a);
// }

// console.log(a);

// let a = 22;

// if (true) {
//   let a = 14;
//   if (false) {
//     a = 12;
//   }
//   console.log(a);
// }

// console.log(a);

// const result = 12 || 22

// const result = 12 && 22

// const result = "" || 22

// const result = "" && 22

// const result = "" || (22 && null)

// const result = ("" && 22) || 16

// console.log(result);

// function foo() {
//   let message = `I have friends`;
//   const arr = Array.from(arguments);
//   console.log(message + " " + arr.join(", "));
//   return message + " " + arr.join(", ");
// }

// foo("Den", "Alex");

// foo("Den", "Alex", "David");


// 3. Напишіть функцію squareDigits, яка приймає число та зводить у квадрат кожен символ.
// function squareDigits(number){
//     const str = String(number);
//     const numArr = [];
// const numberArr = str.split("");
// for(let i=0; i<numberArr.length; i+=1){
//     const numPow = Math.pow(numberArr[i], 2);
//      numArr.push(numPow);
     
// }
// return numArr.join("");
// }

// 4. Напишіть функцію isPalindrome, яка перевіряє, чи переданий рядок є паліндромом.
// Паліндром - це слово, фраза чи послідовність, які читаються так само як уперед, назад, наприклад, level.


//  function isPalindrome(newString) {
//   // const str = newString.toLowerCase();
//   // return str === str.split("").reverse().join("");
   
   
// }

   
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome("level"));

console.log(isPalindrome('level')); // true
console.log(isPalindrome('topot')); // true
// console.log(isPalindrome('вимив')); // true
// console.log(isPalindrome('анна')); // true
// console.log(isPalindrome('алла')); // true
// console.log(isPalindrome('дід')); // true
// console.log(isPalindrome('ротатор')); // true
// console.log(isPalindrome('радар')); // true
// console.log(isPalindrome('привіт')); // false
console.log(isPalindrome('що')); // false
console.log(isPalindrome('that'));  // false


//------------------------

// 5. Написати функцію stringTransformer, яка буде трансформувати рядок за такими правилами:

// 1) Змінити регістр кожного знака, тобто. нижній регістр у верхній регістр, верхній регістр у нижній регістр. (наприклад 'FizzBuzz'-> 'fIZZbUZZ');
// 2) Змінити порядок слів на зворотний (наприклад, 'pen pineapple apple PEN' --> 'pen APPLE PINEAPPLE PEN'). // Done


// console.log(stringTransformer('torininGEN THE bEst'));
// BeST the TORININgen

// console.log(stringTransformer('JavaScript IS cool LANGUAGE'));
// language COOL is jAVAsCRIPT


//------------------------

// 6. Реалізувати функцію, яка виконуватиме математичні операції з введеними користувачем числами

// Технічні вимоги:

// Взяти за допомогою модального вікна браузера два числа. ( функцією )
// Взяти за допомогою модального вікна браузера математичну операцію, яку потрібно здійснити. Сюди можна ввести +, -, *, /. ( функцією )
// Створити функцію, в якій провести запит чисел, мат. операції та виконати обчислення )
// Вивести у консоль результат виконання функції.
//
// Необов'язкове завдання додаткової складності:
//
// Після введення даних додати перевірку їхньої коректності.
// Якщо користувач не ввів числа, або при введенні вказав не числа - запитати обидва числа заново
// Якщо користувач вві неправильний символ - запитати ще раз



//------------------------

//  напиши функцію яка буде створювати масив з не унікальних значень в масиві, які є в тестових масивах
function foo(newArr){
    const notUnicArr = []
    for( let i = 0; i < newArr.length; i+=1){
        if(newArr.includes(newArr[i], i+1))
        notUnicArr.push(newArr[i])
    }
    return notUnicArr
}

const arr1 = [1, 2];
const arr2 = [2, 3];
const arr3 = ['a', 'b'];
const arr4 = ['b', 'c'];
const arr5 = ['b', 'e', 'c'];
const arr6 = ['b', 'b', 'e'];
const arr7 = ['b', 'c', 'e'];
const arr8 = ['b', 'e', 'c'];
console.log(foo(arr1))
console.log(foo(arr2))
console.log(foo(arr3))
console.log(foo(arr4))
console.log(foo(arr5))
console.log(foo(arr6))
console.log(foo(arr7))
console.log(foo(arr8))

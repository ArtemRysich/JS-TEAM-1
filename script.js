// Дано рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'
//const str = "kabcde";
//const isContains = str.startsWith("a");
//if (isContains) {
//console.log("ok");
//} else {
//console.log("false");
//}// Робимо ім

//ітацію логіна юзера і визначаємо до якої групи він відноситься
// В перший prompt() юзер вводить своє імя, в 2 prompt() вводить свій вік
// Якщо юзер молодший 18 років виводемо стрінгу `User ${name} has been added to the children group
// Якщо юзеу 18 років і більше виводемо стрінгу `User ${name} has been added to the adult group
//console.log(Number(null));
//const userName = prompt("What's your name");
//const age = prompt("What's your age");

//const ageToNumber = Number(age);

//if (!age) {
// console.log("Enter");
//} else if (ageToNumber < 18) {
//console.log(`User ${userName} has been added to the children group`);
//} else {
// console.log(`User ${userName} has been added to the adult group`);
//}

// Потрібно створити світлофор за допомогою switch()
// Користувач вводить в prompt() колір який він бачить
// В результаті отримує меседж з дією яку повинен виконати
// Світлофор може мати 4 стани green (GO), yellow (READY),red (STOP), будь що інше означає що сфітлофор не працює (BE CAREFUL)

//const color = prompt("What color do you see?");
//const newColor = color ? color.toLowerCase() : color;
//let message;
//switch (newColor) {
// case "red":
//   message = "STOP";
//   break;

// case "green":
//  message = "GO";
//  break;

// case "yellow":
//  message = "READY";
//  break;

// default:
//   message = "BE CAREFUL";
//}
//console.log(message);

//const str = "12a345";
//const toNum = str;
//console.log(typeof toNum, toNum);
//console.log("порівняння", toNum === toNum);
//console.log(NaN === NaN); // false
//console.log("isNaN()", isNaN(toNum)); // примусово конвертує в Number
//console.log("Number.isNaN()", Number.isNaN(toNum)); // НЕ конвертує в Number

//const str = "1234556";

//for (let i = 0; i < str.length; i += 1) {
//str[i] - поточний елемент ітерації
//const isDouble = str.includes(str[i], i + 1);
//i - значення лічильника, яке ми співставляємо із індексом елемента
//if (isDouble) {
//  console.log(str[i]);
//}
//}
//Створити функцію яка буде рахувати за скільки днів равлик зможе виповзти з колодязя, функція приймає 1 параметр.
//1 глибина колодязя (depth)

//Функція повертає кількість днів

// Умови:
// вдень Равлик проповзає на 7 м вгору, а за ніч опускається на 2 м вниз
// використовувати цикл while()

// function calcDays(depth) {

// }
// calcDays(42)//виповзе за 8 днів
// calcDays(17)//виповзе за 3 дні
// calcDays(18)//виповзе за 4 дні

//const depth = 42;
//const daySpeed = 7;
//const nightSpeed = 2;
//let total = 0;
//let days = 0;

//while (total < depth) {
//days += 1;
//total += daySpeed;
//if (total < depth) {
//  total -= nightSpeed;
//}
//}
//console.log(days);

// Просумувати всі елемнти рядку, якщо їх можливо привести до числа
//const str = '357g235'

//const str = "357g235";
//let total = 0;

//for (let i = 0; i < str.length; i += 1) {
//if (!isNaN(str[i])) {
// total += Number(str[i]);
//}
//}
//console.log(total);

//. За допомогою циклу for додайте всі парні числа від min до max

const max = 50;
const min = 0;
let total = 0;

for (let i = min; i <= max; i += 1) {
  if (!(i % 2)) {
    //аналог i%2===0
    total += i;
  }
}
console.log(total);

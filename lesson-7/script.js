// function add(a, b) {
//   return a + b;
// }
// console.log(add(10, 5));

// const add = (a, b) => a + b;

// function add() {
//   // const arr = [...arguments]
//   const arrs = Array.from(arguments);
//   console.log(arrs);
//   let sum=0;
//   for (const arr of arrs) {
//     sum += arr;
//   }
//   console.log(sum)
// }
// console.log(add(10, 5));

// const add = (a, ...args) => {
//   console.log(args);
// };
// console.log(add(10, 5));

// function foo(a, callback) {
//   //callback-add
// }
// foo(4, add);
// console.log(add);
// console.log(foo(4, (a, b) => a + b));

// Маємо масив з переможними комбінаціями (jackpot), а також декілька тестових масивів з ходами наших учасників.
// Потрібно створити функція яка буде повертати true або false в залежності від того чи ходи учасника співпадають з однією з переможних комбінацій.

const jackpot = [
  [1, 2, 3],
  [1, 5, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [3, 5, 7],
  [4, 5, 6],
  [7, 8, 9],
];

// перебираємо масив джекпот щоб отримати кожен вкладений всередину масив,
// перебираємо потім кожен із вкладених масивів по елементам

const winner = (arr) => {
  let isWinner = false;
  for (const elem of jackpot) {
    let isAllArray = true;
    for (const item of elem) {
      if (!arr.includes(item)) {
        isAllArray = false;
        break;
      }
    }
    if (isAllArray) {
      isWinner = true;
      return isWinner;
    }
  }
  return isWinner;
};

const player1 = [2, 4, 1]; //false
const player2 = [9, 4, 3]; //false
const player3 = [6, 3, 9]; //true

console.log(winner(player1));
console.log(winner(player2));
console.log(winner(player3));

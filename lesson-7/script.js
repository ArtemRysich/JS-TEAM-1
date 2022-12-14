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

const add = (a, ...args) => {
  console.log(args);
};
console.log(add(10, 5));

function foo(a, callback) {
  //callback-add
}
foo(4, add);
console.log(add);
console.log(foo(4, (a, b) => a + b));

//Замінити всі розширення файлів з .css на .js

// const files = ['index.css', 'script.js', 'style.css', 'step-types.json', 'firebase.css'];

// for (let i = 0; i < files.length; i += 1) {
//   console.log(files[i].replace('.css', '.js'));
//   console.log(files[i]);
//   files[i] = files[i].replace('.css', '.js');
// }
// console.log(files);

//Створити функцію яка буде приймати 2 параметри
//1 параметр це масив всіх юзерів. (users)
//2 параметр це масив з чоловічими іменами. (mens)
// Функція повина повертати масив з жіночими іменами.

//  const users = ['Artem', 'Anna', 'Larisa', 'Maksim', 'Svetlana', 'David', 'Roman', 'Olga'];
//  const men = ['Artem', 'Maksim', 'David', 'Roman'];
// const women=[];
// for( const user of users){
// if(!men.includes(user)){
// console.log(user)
// women.push(user)
// }
// }
// console.log(women)

// Потрібно мутувати масив так щоб залишились тільки (імена) елементи типу String.
const names = ["Anna", 3, "Roma", 17, "Kate", 14, 12, "Oleg"];
for (let i = 0; i < names.length; i++) {
  if (typeof names[i] !== "string") {
    names.splice(i, 1);
    i -= 1;
  }
}
console.log(names);

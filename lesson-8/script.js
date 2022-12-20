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
let theMostExpensiveCarPrice = 0
let theMostExpensiveCarName = ''

    cars.forEach(( {car, price}) => {
        if(price > theMostExpensiveCarPrice){
            theMostExpensiveCarPrice = price
            theMostExpensiveCarName = car
        }

})
console.log(theMostExpensiveCarName)

// cars.sort((a,b) => b.price -  a.price)
// theMostExpensiveCarPrice = cars[0].price
// console.log(cars[0])
// console.log(theMostExpensiveCarPrice)

/* const carArr = cars.map(({ car }) => car)
console.log(carArr)
 */
const carArr = cars.filter(({ price }) => price < 15000).map(({car}) => car)
console.log(carArr)


// ПРО НАРЦИСІВ___________
// const people1 = [{ name: 'Alex', know: ['Eva', 'Jhon'], }, 
//    { name: 'Ivan', know: ['Jhon', 'Alex'] }, 
//   { name: 'Eva', know: ['Alex', 'Jhon'] },
//   { name: 'Jhon', know: ['Alex'] },]
    
// const people2 = [{ name: 'Alex', know: ['Eva', 'Jhon'], },
//   { name: 'Jhon', know: [] },
//   { name: 'Eva', know: [] },
//   { name: 'Ivan', know: ['Jhon', 'Alex'] },
// ]; //// Expected result: Not found 

// const people3 = [{ name: 'Alex', know: ['Eva', 'Jhon'], }, 
// { name: 'Jhon', know: []  },
// { name: 'Eva', know: ['Alex', 'Jhon'] },
// {  name: 'Ivan', know: ['Jhon', 'Alex'] },  ]; //// Expected result: Jhon

// const findNarcis = people2.filter(people => !people.know.length);
 
// if (findNarcis.length === 1) {
 
//   const narcis = people2.filter(people => people.know.length).every(people => people.know.includes(findNarcis[0].name));
//  console.log(findNarcis[0].name) 
// }
// else {console.log("Нарцисів немає")}
 
// findNarcis();

const findNarcis = friends => {
  const arr = friends.filter(friend => !friend.know.length);
 
if (arr.length === 1) {
  console.log(arr);
 const name = arr[0].name;
 const result = friends.every((friend) => friend.know.includes(name) || friend.name === name)
 if(result){
  console.log(name)
 }else{
  console.log("Нарцисів немає")
 }
 
}
  else {console.log("Нарцисів немає")}
}
  findNarcis(people3);
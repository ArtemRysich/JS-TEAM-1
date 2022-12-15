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
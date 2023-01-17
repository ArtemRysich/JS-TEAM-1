// function fetchCountries() {
// return fetch(`https://restcountries.com/v3.1/name/peru?fields=name,capital,population,flags,languages`).then(response => {
//     if(!response.ok) {
//         throw new Error (response.status)
//     }
//     return response.json();
// })
// }

// fetchCountries().then(data => {
//     console.log(data);
// })
console.log('start');
// async function fetchCountries(){
//     try {

//     const response = await fetch(`https://restcountries.com/v3.1/name/peru?fields=name,capital,population,flags,languages`);
//     if(!response.ok) {
//         throw new Error (response.status)
//     }
//     const data = await response.json();
//     console.log(data);
//     } catch (error) {
//         console.log(error);
//     } 
// }

async function fetchCountries(){

    // const response1 = await fetch(`https://restcountries.com/v3.1/name/peru?fields=name,capital,population,flags,languages`);
    // const response2 = await fetch(`https://restcountries.com/v3.1/name/ukraine?fields=name,capital,population,flags,languages`);
    // const response3 = await fetch(`https://restcountries.com/v3.1/name/poland?fields=name,capital,population,flags,languages`);

const countries = ['Peru', 'Ukraine', 'Poland', 'qweqwe'];
const responses = countries.map(async el => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${el}?fields=name,capital,population,flags,languages`)
    // if (!response.ok) {
    //     //throw new Error() 
    //     return Promise.reject();
    // }
    return response.json();

})
const data = await Promise.all(responses);
//const data = await Promise.allSettled(responses);
// data.forEach ((item) => {
// if (item.status === 'fulfilled') {
// console.log(item);
// };
// }  
//)
console.log(data);
//console.log(responses);
    // if(!response.ok) {
    //     throw new Error (response.status)
    // }
    // const data = await response.json();
    // console.log(data);
    // return data;
     } 


fetchCountries().then(data => console.log(data)).catch(error => console.log(error));

console.log('end');
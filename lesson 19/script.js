// http://api.weatherapi.com/v1
// 94a040c94bab4dcabf9130808222712
// /forecast.json
const form= document.querySelector(".js-form");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event){
    event.preventDefault();
 const city = event.currentTarget.elements.city.value;
 console.log(city)
 weatherApi(city).then(data=>{
    console.log(data)
 }).catch(error=>{
    console.log(error);
 })
}

function weatherApi(city){
    
return fetch(`http://api.weatherapi.com/v1/forecast.json?key=94a040c94bab4dcabf9130808222712&q=${city}&days=3`).then(response =>{
   if(!response.ok){
    throw new Error(response.statusText)
   } 
   return response.json();
})
}

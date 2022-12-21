// const div = document.querySelector(".js-one")
// const divId = document.querySelector("#qwe")
// console.log(div);
// console.log(divId)
// const divTeg = document.querySelector("div")
// console.log(divTeg)
const div = document.querySelectorAll(".js-one");

const divTwo = document.getElementsByClassName("js-one")
const container = document.querySelector(".js-container")
let markup = "";
for(let i = 0; i < 5; i +=1){
    markup += `<div class="js-one"></div>`
}
container.insertAdjacentHTML("beforeend", markup)

console.log(divTwo)
console.log(div)

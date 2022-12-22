// const square = document.querySelector(".square");
// // square.addEventListener('click', onClick);
// // let step = 0;
// // function onClick(evt) {
// //     step += 50;
// //     evt.currentTarget.style.marginLeft = step + "px"
// //     evt.currentTarget.style.marginTop = step + "px"
// //     console.log(evt.currentTarget)
// // }

// let stepX = 0;
// let stepY = 0;

// document.addEventListener("keydown", onPressArrow);
// function onPressArrow(evt) {
  
//   switch (evt.code) {
//     case "ArrowUp":
        
//         stepY = stepY - 10 >= 0 ? stepY - 10 : 0;
       
//           square.style.marginTop = stepY + "px";
      
//       break;
//     case "ArrowDown":
//         stepY += 10;
//       square.style.marginTop = stepY + "px";
//       break;
//       case "ArrowRight":
//         stepX += 10;
//         square.style.marginLeft = stepX + "px";
//         break;
//         case "ArrowLeft":
        
//         stepX = stepX - 10 >= 0 ? stepX - 10 : 0;
//         square.style.marginLeft = stepX + "px";

//   }
//   console.log(evt);
// }


// const input = document.querySelector('.js-input')
// const title = document.querySelector('.js-title')
// input.addEventListener("input", onInput)

// function onInput(event) {
//   if (event.currentTarget.value.length > 15) {
//     title.textContent = 'Welcome'
//   }
// }




const formOne = document.querySelector('.js-form-one');
formOne.addEventListener('submit', onForm);

function onForm(evt) {

    evt.preventDefault()
    const { search, qwery } = evt.currentTarget.elements;
    
    console.log(search.value, qwery.value);
    console.dir(evt.currentTarget.elements);
}



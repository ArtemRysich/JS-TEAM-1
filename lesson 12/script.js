const square = document.querySelector(".square");
// square.addEventListener('click', onClick);
// let step = 0;
// function onClick(evt) {
//     step += 50;
//     evt.currentTarget.style.marginLeft = step + "px"
//     evt.currentTarget.style.marginTop = step + "px"
//     console.log(evt.currentTarget)
// }

let stepX = 0;
let stepY = 0;

document.addEventListener("keydown", onPressArrow);
function onPressArrow(evt) {
  
  switch (evt.code) {
    case "ArrowUp":
        
        stepY = stepY - 10 >= 0 ? stepY - 10 : 0;
       
          square.style.marginTop = stepY + "px";
      
      break;
    case "ArrowDown":
        stepY += 10;
      square.style.marginTop = stepY + "px";
      break;
      case "ArrowRight":
        stepX += 10;
        square.style.marginLeft = stepX + "px";
        break;
        case "ArrowLeft":
        
        stepX = stepX - 10 >= 0 ? stepX - 10 : 0;
        square.style.marginLeft = stepX + "px";

  }
  console.log(evt);
}

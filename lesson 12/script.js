const square = document.querySelector('.square');
square.addEventListener('click', onClick);
let step = 0;
function onClick(evt) {
    step += 50;
    evt.currentTarget.style.marginLeft = step + "px"
    evt.currentTarget.style.marginTop = step + "px"
    console.log(evt.currentTarget)
}

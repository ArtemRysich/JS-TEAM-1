const divEl = document.querySelector(".content");
let stepX = [];
let stepO = [];
let markup = "";
for (let i = 1; i <= 9; i += 1) {
  markup += `<div class="item" data-id ="${i}"></div>`;
}
divEl.insertAdjacentHTML("beforeend", markup);
divEl.addEventListener("click", onClick);
let pleyer = "X";
function onClick(evt) {
  if (!evt.target.textContent) {
    const { id } = evt.target.dataset;
    let isWinner = false;
    evt.target.textContent = pleyer;
    if (pleyer === "X") {
      stepX.push(Number(id));
      console.log(stepX);
      isWinner = winner(stepX);
    } else {
      stepO.push(Number(id));
      console.log(stepO);
      isWinner = winner(stepO);
    }
    if (isWinner) {
      console.log(pleyer + " is winner");
      restartGame()
      return;

    } 
    pleyer = pleyer === "X" ? "O" : "X";
  }
}
function restartGame() {
    divEl.innerHTML = markup;
    stepO = []; 
    stepX = []; 
    pleyer = "X";
}
const winner = (arr) =>
  jackpot.some((item) => item.every((value) => arr.includes(value))); // value - елемент масива
const jackpot = [
  [1, 2, 3],
  [1, 5, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [3, 5, 7],
  [4, 5, 6],
  [7, 8, 9],
];

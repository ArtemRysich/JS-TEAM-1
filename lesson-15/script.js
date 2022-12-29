const divEl = document.querySelector(".content");
const restart = document.querySelector(".js-restart");
let stepX = JSON.parse(localStorage.getItem("playerX")) || [];
let stepO = JSON.parse(localStorage.getItem("playerO")) || [];
console.log(stepX, stepO);
let markup = "";
for (let i = 1; i <= 9; i += 1) {
  markup += `<div class="item" data-id ="${i}"></div>`;
}
divEl.insertAdjacentHTML("beforeend", markup);
[...divEl.children].forEach((item) => {
  const id = Number(item.dataset.id);
  console.log(item.dataset.id);
  if (stepX.includes(id)) {
    item.textContent = "X";
  } else if (stepO.includes(id)) {
    item.textContent = "O";
  }
});
divEl.addEventListener("click", onClick);
restart.addEventListener("click", restartGame);
let player = localStorage.getItem("currentPlayer") || "X";
function onClick(evt) {
  if (!evt.target.textContent) {
    const { id } = evt.target.dataset;
    let isWinner = false;
    evt.target.textContent = player;
    if (player === "X") {
      stepX.push(Number(id));
      localStorage.setItem("playerX", JSON.stringify(stepX));
      console.log(stepX);
      isWinner = winner(stepX);
    } else {
      stepO.push(Number(id));
      localStorage.setItem("playerO", JSON.stringify(stepO));
      console.log(stepO);
      isWinner = winner(stepO);
    }
    if (isWinner) {
      console.log(player + " is winner");
      restartGame();
      return;
    }
    player = player === "X" ? "O" : "X";
    localStorage.setItem("currentPlayer", player);
  }
}
function restartGame() {
  divEl.innerHTML = markup;
  stepO = [];
  stepX = [];
  player = "X";
  localStorage.clear();
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

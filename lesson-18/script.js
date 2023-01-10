const cool = "😎";
const sleepy = "😴";

const btnRef = document.querySelector(".js-start");
const divRef = document.querySelector(".js-container");
btnRef.addEventListener("click", onBtnClick);

function onBtnClick() {
  const result = [];
  for (
    let i = 0, delay = 1000;
    i < divRef.children.length;
    i++, delay += 1000
  ) {
    divRef.children[i].textContent = "";
    createPromise(cool, sleepy, delay)
      .then((win) => {
        divRef.children[i].textContent = win;
        result.push(win);
      })
      .catch((lose) => (divRef.children[i].textContent = lose))
      .finally(() => {
        setTimeout(() => {
          if (i === 2) {
            if (!result.length || result.length === 3) {
              alert("Winner!");
            } else {
              alert("Looser!");
            }
          }
        }, 500);
      });
  }
}

function createPromise(win, lose, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random() > 0.1;
      if (random) {
        resolve(win);
      } else {
        reject(lose);
      }
    }, delay);
  });
  return promise;
}

const ulRef = document.querySelector(".js-characters-list");
const btnRef = document.querySelector(".js-load-more");
btnRef.addEventListener("click", onClick);

let page = 1;

function onClick() {
  page += 1;
  fetchCharacter(page)
    .then((data) => {
      createMarkup(data.results);

      if (page === data.info.pages) {
        btnRef.hidden = true;
      }
    })
    .catch(console.log);
}

function fetchCharacter(page = 1) {
  return fetch(`https://rickandmortyapi.com/api/character?page=${page}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

fetchCharacter()
  .then((data) => {
    createMarkup(data.results);
    btnRef.hidden = false;
  })
  .catch(console.log);

function createMarkup(arr) {
  const markup = arr
    .map(
      ({ image, name, status }) => `<li class="js-characters-item">
  <img src="${image}" alt="${name} picture" />
  <p class="js-character-name">${name}</p>
  <p class="js-character-status">${status}</p>
</li>`
    )
    .join("");
  ulRef.insertAdjacentHTML("beforeend", markup);
}

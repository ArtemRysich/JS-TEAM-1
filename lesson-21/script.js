const formEl = document.querySelector(".js-form");
const listEl = document.querySelector(".js-list");


formEl.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const { title, body } = evt.target.elements;
  const obj = { title: title.value, body: body.value };
  postApi(obj).then(data=>{
    createPost({...data, ...obj})
    
    console.log(data)
    
  }).catch(error=>{
    console.log(error)
  })
}

// // GET-запит
// function getApi() {
//   return fetch("https://jsonplaceholder.typicode.com/posts/1").then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error(response.statusText);
//       }
//       return response.json();
//     }
//   );
// }
// // getApi().then((data) => console.log(data));

// // POST-запит

// function postApi(data) {
//   const options = {
//     method: "POST",
//     body: JSON.stringify(data),
//   };
//   return fetch("https://jsonplaceholder.typicode.com/posts", options).then((response)=>{
//     console.log(response);
//     if(!response.ok){
//         throw new Error(response.statusText)
//     }
//     return response.json();
//   });
// }

// function createPost(obj){
//     listEl.insertAdjacentHTML("beforeend", `<li data-post="${obj.id}">
//     <h2>${obj.title}</h2>
//     <p>${obj.body}</p>
// </li>`)
// }

// PATCH/PUT- запит

function putchApi(){
    const options ={
        method: "PATCH",
        body: JSON.stringify({
            id: 2,
            title: "Hello world",
            
        }),
        headers:{
            "Content-Type": "application/json; charset=utf-8",
        }
    }

    return fetch("https://jsonplaceholder.typicode.com/posts/2", options).then((response)=>{
        console.log(response);
        if(!response.ok){

            throw new Error(response.statusText);
        }
        return response.json();
    })
}
putchApi().then(data=>{
    console.log(data)
})

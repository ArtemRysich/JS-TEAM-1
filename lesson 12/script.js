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




// const formOne = document.querySelector('.js-form-one');
// formOne.addEventListener('submit', onForm);

// function onForm(evt) {

//     evt.preventDefault()
//     const { search, qwery } = evt.currentTarget.elements;
    
//     console.log(search.value, qwery.value);
//     console.dir(evt.currentTarget.elements);
// }

// потрібно створити функцію яка буде формувати чергу в магазині
// 1 перший параметр масив, кілікість елементів це кількість покіпців, значення елементу масиву це час який покупець витратить на касі
// 2 параметр це кількість кас
// Повертає обєкт де ключ це номер касси, значення це час черги на касі
// 12 + 2 + 15 = 29
// 3 + 5 + 6 + 7 = 21
// { 1 : 29, 2 : 21}

// 1 розв'язок===========================================================================

// function fn(buyers, cases) {
//     const casesObj = {};
//     for (let i = 1; i <= cases; i += 1) {
//         casesObj[i] = 0;
//     }
//       return buyers.reduce((acc, buyer) => {
//           const buyersValue = Object.values(casesObj);
//           const minBuyersValue = Math.min(...buyersValue);
//           const expressCases = buyersValue.indexOf(minBuyersValue) + 1;
//           acc[expressCases] += buyer;
//           return acc;
//       }, casesObj)
//     }
   
// console.log(fn([12,3,5,6,2,15,7],2))

// { ‚1‘: 12, ‚2‘: 0 }
// { ‚1‘: 12, ‚2‘: 3 }
// { ‚1‘: 12, ‚2‘: 8 }
// { ‚1‘: 12, ‚2‘: 14 }
// { ‚1‘: 14, ‚2‘: 14 }
// { ‚1‘: 29, ‚2‘: 14 }
// { ‚1‘: 29, ‚2‘: 21 }
// { ‚1‘: 29, ‚2‘: 21 }




// 2 розв'язок============================================================================


const buyers = [12,3,5,6,2,15,7]
const cases = 2;

function fn(buyers, cases) {
    // создала массив касс
  const cashBox = [];
// через цикл перебра cases, добавила в объект ключ:значение, котрые нам нужны по условию
    for (let i = 1; i <= cases; i+=1) {
        //запушила в cashBox и получила массив объектов
    cashBox.push({key: i, count: 0});
  }
//   console.log(cashBox);
// }
//  fn(buyers, cases);
     buyers.forEach((item) => { //перебираю массив buyers
//     // console.log(item);
//     //создала переменную, в которую запишется результат и изменит мой исходный массив cashBox по ссылке
//     //сортирую массив по ключу count
//     //в sorted на первой позиции элемент, в котором меньше всего значение,
//     //к которому я и приплюсовываю новое значение
//     //Так как forEach вызывает коллбэк-функцию для каждого эллемента, то переберется
//     //весь массив и отсортирует его по меньшему значению
    const sorted = cashBox.sort((a, b) => a.count - b.count)
        sorted[0].count += item;
           
      });
// //   return cashBox;
// //   console.log(cashBox);
// // Добавляю на cashBox метод reduce, передаю в начльние значение аккумулятора пустой массив,
// // распыляю массив, возвращаю результат reduce из функции
  return cashBox.reduce((acc, elem) => {
    return {
      ...acc,
      [elem.key]: elem.count,
    }
  }, {});
}
console.log(fn(buyers, cases));












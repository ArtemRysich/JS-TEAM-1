const dateDay = document.querySelector(".js-date-day");
const dateDate = document.querySelector(".js-date");
const dateMonth = document.querySelector('.js-date-month');
const dateYear = document.querySelector('.js-date-year');

const namesOfMonth = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень' , 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
const namesOfDay = ['Неділя', 'Понеділок','Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота' ]

const currentDate = new Date();
// console.log(currentDate);

const dateCurrentDay = currentDate.getDay();
const dateCurrentDate = currentDate.getDate();
const dateCurrentMonth = currentDate.getMonth();
const dateCurrentYear = currentDate.getFullYear();

dateDay.textContent = namesOfDay[dateCurrentDay];
dateDate.textContent = dateCurrentDate;
dateMonth.textContent = namesOfMonth[dateCurrentMonth];
dateYear.textContent = dateCurrentYear;






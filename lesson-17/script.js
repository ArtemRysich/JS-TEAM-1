const dateDay = document.querySelector(".js-date-day");
const dateDate = document.querySelector(".js-date");
const dateMonth = document.querySelector('.js-date-month');
const dateYear = document.querySelector('.js-date-year');
const digitalClock = document.querySelector(".js-digital-clock");
const arrowSeconds = document.querySelector('.js-clock-seconds');
const arrowMinutes = document.querySelector('.js-clock-minutes');
const arrowHours = document.querySelector('.js-clock-hours');

const namesOfMonth = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень' , 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
const namesOfDay = ['Неділя', 'Понеділок','Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота' ]



setInterval(()=>{
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
 
const hours  = currentDate.getHours();
const minutes  = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
console.log(hours)
const result = `Поточний час ${hours.toString().padStart(2, "0")} : ${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;
digitalClock.textContent = result;

const arrowSecondsDeg = 360/60;
const arrowMinutesDeg = 360/60;
const arrowHoursDeg = 360/12;
arrowSeconds.style.transform = `rotate(${arrowSecondsDeg*seconds}deg)`;
arrowMinutes.style.transform = `rotate(${arrowMinutesDeg*minutes}deg)`;
// arrowHours.style.transform = `rotate(${arrowHoursDeg*hours + minutes*arrowMinutesDeg/12}deg)`;
arrowHours.style.transform = `rotate(${arrowHoursDeg*hours + minutes*0.33}deg)`;

},1000)






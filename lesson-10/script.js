// Реалізуйте клас Student, який успадковуватиметься від класу User. Цей клас повинен мати такі властивості:
// name приватна властивість (ім'я, успадковується від User),
// surname приватна властивість (прізвище, успадковується від User),
// year (рік вступу до вузу).
// Клас повинен мати метод getFullName() (успадковується від User), за допомогою якого можна вивести одночасно ім'я та прізвище студента.
// Також клас повинен мати метод getCourse(), який виводитиме поточний курс студента (від 1 до 5, якщо значення перевищує 5  курс виводити що студент являєтсья випускником).
// Курс обчислюється так: потрібно від поточного року відняти рік вступу до вузу. Поточний рік отримаєте самостійно (читати документацію!!!).
// Приклад ініціалізації екземпляру класа:
// const student = new Student('Петрик', 'Пяточкин', 2019);

class User {
  #name;
  #surname;

  constructor(name, surname) {
    this.#name = name;
    this.#surname = surname;
  }

  getFullName() {
    return `${this.#name} ${this.#surname}`;
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);

    this.year = year;
  }

  getCourse() {
    const currentTime = new Date().getFullYear();
    const result = currentTime - this.year;
    if (result <= 5) {
      return result;
    }
    return `Вже випускник!`;
  }
}

const student = new Student("Yuliya", "Nikiforova", 2020);
console.log(student.getCourse());
console.log(student.getFullName()); //поверне 'Петрик Пяточкин'
console.log(student.getCourse()); //поверне 3 (третій курс)
console.log(student);

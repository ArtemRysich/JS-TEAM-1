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
  static counter = 0;
  static addUser(){
    this.counter +=1;
    console.log(this.counter)
  }
  #name;
  #surname;

  constructor(name, surname) {
    this.#name = name;
    this.#surname = surname;
    User.addUser()
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
const student1 = new Student("Vita", "1232");
const student2 = new Student("ghjhg", "1ghgjh");
const user1 = new User("Vita111", "qwe");
const user2 = new User("Vita222", "qtyu");
// const student = new Student("Yuliya", "Nikiforova", 2020);
// console.log(student.getCourse());
// console.log(student.getFullName()); //поверне 'Петрик Пяточкин'
// console.log(student.getCourse()); //поверне 3 (третій курс)
// console.log(student);

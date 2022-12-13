// 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати списoк імен учнів факультету
// 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати кількість очків факультета
// 3 Створити метод об'єкту який буде виводити ім'я факультету в якого більше очків

const hogvarts = {
  griffindor: [
    {
      name: "Harry",
      points: 17,
    },
    {
      name: "Hermiona",
      points: 19,
    },
    {
      name: "Ron",
      points: 14,
    },
  ],
  sliserin: [
    {
      name: "Draco",
      points: 17,
    },
    {
      name: "Goyl",
      points: 14,
    },
    {
      name: "Crabbe",
      points: 5,
    },
  ],
  getStudentList(facultet) {
    const nameArr = [];
    for (const { name } of this[facultet]) {
      nameArr.push(name);
    }
    return nameArr;
  },

  getTotalpoints(facultet) {
    let totalPoints = 0;
    for (const { points } of this[facultet]) {
      totalPoints += points;
    }
    return totalPoints;
  },
  getBest(){
    const griffindorPoints = this.getTotalpoints("griffindor");
    const sliserinPoints = this.getTotalpoints("sliserin");
    if(griffindorPoints > sliserinPoints){
        return "griffindor";
    }else{
        return "sliserin";
    }
  }
};
console.log(hogvarts.getBest())

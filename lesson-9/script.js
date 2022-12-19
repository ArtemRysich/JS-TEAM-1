const user = {
  name: ' Alex',
  // getName() {
  //     console.log( `Hello my name is ${this.name}`)
  // }
  getName: () => {
    console.log(`Hello my name is ${this.name}`);
  },
  custom: {
    name: 'Dima',
    city: 'Kyiv',
    getName() {
      const getCity = () => {
        console.log(this.city);
      };
      getCity();
      console.log(`Hello my name is ${this.name}`);
    },
    getName: () => {
      console.log(`Hello my name is ${this.name}`);
      const getCity = () => {
        console.log(this.city);
      };
      getCity();
    },
  },
};
// user.getName();
user.custom.getName();

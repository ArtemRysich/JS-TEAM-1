//Створіть функцію, яка приймає 1 параметр
//1 масив імен користувачів, які поставили лайки.
//Функція повертає меседж, як вказано у прикладах:
//Використовувати switch()


/**
 * 
 * @param {Array} users 
 */
 function stringBuilder(users){
     switch (users.length) {
         case 0:
             console.log("no one likes this");
             break;
         case 1:
             console.log(`${users[0]} likes this`);
             break;  
         case 2:
             console.log(`${users[0]} and ${users[1]} likes this`);
             break;
         case 3:
             console.log(`${users[0]}, ${users[1]} and ${users[2]} likes this`);
             break;
         default:
             console.log(`${users[0]}, ${users[1]} and ${users.length-2} others like this`);
    
}

}

 stringBuilder([])//"no one likes this";
stringBuilder(["Peter"])//"Peter likes this";
 stringBuilder(["Jacob", "Alex"])//"Jacob and Alex like this";
stringBuilder(["Max", "John", "Mark"])//"Max, John and Mark like this";
 stringBuilder(["Alex", "Jacob", "Mark", "Max", "Alex", "Jacob", "Mark", "Max"])//"Alex, Jacob and 2 others like this;

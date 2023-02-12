//Example 1
//У нас є об'єкт, в якому зберігатимуться зарплати
// Нашої команди
// Напишіть код для сумування всіх зарплат і
// Збережіть його результат у змінній sum.
// Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 170,
// };

// let totalSalaries = 0;
// // console.log(Object.entries(salaries));

// for (const salarie of Object.values(salaries)) {
//   console.log(salarie);

//   totalSalaries += salarie;
// }

// console.log("totalSalaries:", totalSalaries);

//Example 2
//Напишіть функцію, яка приймає два аргументи і повертає всі числа,
//які діляться на дільник.
//Перший аргумент – це масив чисел, а другий – дільник.

// const findNumber = function (array, divisor) {
//   const newArray = [];

//   for (const item of array) {
//     //   console.log(item);
//     if (item % divisor === 0) {
//       newArray.push(item);
//     }
//   }
//   return newArray;
// };

// console.log(findNumber([12, 23, 69, 113, 85], 6));

//Example 3
//Напишіть функцію, яка приймає рядок і перетворює її на число

// const func = function (str) {
//   return Number(str);
// };

// console.log(func("7"));

//Example 4
//Паліндром - слово, речення чи послідовність символів, яка абсолютно однаково читається як у звичному напрямку,
//так і у зворотному.
//Наприклад, "Anna" - це паліндром, а "table" і "John" - ні.

// const findName = function (str) {
//   str = str.toLowerCase();
//   const isPolindrom = str.split("").reverse().join("");
//   //   if (isPolindrom === str) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }

//   //Через тренарний оператор
//   return isPolindrom === str ? true : false;
// };

// console.log(findName("anna"));

// FizzBuzz
// Потрібно написати функцію, що виводить у консоль числа від 1 до n, де n - це ціле число, яка функція приймає як параметр, з такими умовами:

// виведення fizz замість чисел, кратних 3;
// виведення buzz замість чисел, кратних 5;
// виведення fizzbuzz замість чисел, кратних як 3, і 5.

// example 5

// function fizzbuz(number) {
//   for (let i = 1; i <= number; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log(`fizzbizz`);
//     } else if (i % 3 === 0) {
//       console.log(`fiz`);
//     } else if (i % 5 === 0) {
//       console.log(`buzz`);
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzbuz(35);

// Пошук голосних

// Потрібно написати функцію, яка приймає рядок як аргумент і повертає кількість голосних, які містяться в рядку.
// Голосними є "a", "e", "i", "o", "u".

// example 6

// function count(str) {
//   const golos = ["a", "e", "i", "o", "u"];
//   let countGolos = 0;

//   for (let char of str.toLowerCase()) {
//     if (golos.includes(char)) {
//       countGolos++;
//     }
//   }
//   return console.log(countGolos);
// }
// count(`SpAcE`);
// example 7
// Напишіть ф-цію calcTotalPrice(stones, stonesName),
// яка приймає масив об'єктів та
// рядок під назвою каменю.
// Функція  повертає загальну вартість каменів
// з таким ім'ям, ціною та кількістю з об'єкта
// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 6 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 150, quantity: 100 },
// ];

// function calcTotalPrice(stones, stonesName) {
//   let totalPrice = 0;
//   for (let stone of stones) {
//     console.log(stone);
//     if (stone.name === stonesName) {
//       totalPrice = stone.price * stone.quantity;
//     }
//   }
//   return console.log(totalPrice);
// }

// calcTotalPrice(stones, `Щебень`);

//TODO:===========================
// Створіть масив styles з елементами «Джаз» та «Блюз».
//Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
//Видалить перший елемент масиву і виведіть його в консоль.
//Вставте «Реп» і «Реггі» на початок масиву.

// example 8
// const style = [`Джаз`, `Блюз`];

// style.push("Рок-н-рол");
// console.log(style); // джаз блюз рок-н-ролл
// style.splice(1, 1, "Класика");
// console.log(style); // 'Джаз', 'Класика', 'Рок-н-рол'
// console.log(style.splice(0, 1)); //
// style.splice(0, 0, `Реп`, `Реггі`);
// console.log(style);

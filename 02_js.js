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

// TODO:===================================
// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.

// const number = 10;
// const b = 5;
// if (number === 10) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// b === number ? console.log(true) : console.log(false);

// TODO:===================================
// У змінній min лежить число від 0 до 59. Визначте у котру чверть години
// Попадає це число (у першу, другу, третю або четверту).

// const min = 35;

// if (0 <= min && min <= 15) {
//   console.log("Перша чверть");
// }
// if (16 <= min && min <= 29) {
//   console.log("Друга чверть");
// }
// if (30 <= min && min <= 44) {
//   console.log("Третя чверть");
// }
// if (45 <= min && min <= 59) {
//   console.log("Четверта чверть");
// }
// Example 3
// TODO:===================================
// Використовуючи конструкцію if...else,
// напишіть код, який запитуватиме:
// "Яка офіційна назва JavaScript?"
// Якщо користувач вводить "ECMAScript",
// показати через alert: "Вірно!"
// інакше відобразити: "Не знаєте? ECMAScript!"

// const question = prompt('"Яка офіційна назва JavaScript?"');

// if (question === "ECMAScript") {
//     alert("Вірно!");
// } else {
// alert("Не знаєте? ECMAScript!")
// }

// Example 4
// TODO:===================================
// Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max

// const max = 50;
// const min = 23;
// let totalNumber = 0;

// for (let i = max; i >= min; i -= 1) {
//     if (i % 2 === 0) {
//         totalNumber += i
//     }
// }

// console.log(totalNumber);

// Example 5
// Напишіть код, який запитуватиме
// Логін за допомогою prompt і логувати результат
// В консоль браузера

// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль.
// Якщо нічого не ввели або натиснута клавіша Esc
// Вивести рядок "Скасовано"
//  Інакше вивести рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний", то вивести рядок "Здрастуйте!"
// інакше виводити рядок "Невірний пароль!"

// const pass = prompt("Введить логін");
// if (pass === "Адмін") {
//   const password = prompt("Введить пароль");
//   if (password) {
//     if (password === "Я головний") {
//       console.log("Здрастуйте!");
//     } else {
//       console.log("Невірний пароль!");
//     }
//   } else {
//     console.log("Скасовано");
//   }
// } else {
//   console.log("Я вас не знаю");
// }
// TODO:===================================
// При завантаженні сторінки користувачеві пропонується
// в prompt ввести число. Введення додається до значення
// змінної total.
// Операція введення числа триває до того часу,
// поки користувач не натисне кнопку Cancel в prompt.
// Після того, як користувач припинив введення натиснувши на
// кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
// Робити перевірку,що користувач ввів саме число,
// а не довільний набір символів, не потрібно.

// example 6
// let number = prompt("Введiть число");
// let check = false;
// let total = 0;
// do {
//   if (number) {
//     total += Number(number);
//     number = prompt("Введiть число");
//     check = true;
//   } else {
//     alert(`Загальна сума введених чисел дорівнює ${total}.`);
//     check = false;
//   }
// } while (check);

// Напишіть цикл, який пропонує ввести число більше 100 через prompt.
// Якщо якщо відвідувач ввів інше число - попросити
// Ввести ще раз і так далі.
// Цикл повинен запитувати число, поки відвідувач не введе число більше 100, або натисне кнопку
// Скасування в prompt

// example 7
// let number = prompt("Введiть число >100");
// let check = false;
// do {
//   if (number < 100) {
//     number = prompt("Введiть ще раз");
//     check = true;
//   } else {
//     check = false;
//   }
// } while (check);

// alert(number);

// example 8
// Дано рядок, що складається із символів, наприклад, 'abcde'.
//  Перевірте, що першим символом цього рядка є буква 'a'.
//  Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// const strings = prompt("Ведiть слово");
// console.log(strings[0]);
// if (strings[0] === "a") {
//   console.log(true);
// } else {
//   console.log(false);
// }

// example 9
// Напишіть через свіч пошуку автора мови програмування
//  пишемо назву мови у шаблонному рядку отримує відповідь мова та автор
//  PHP Расмус Лердорф
//  C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота
//  Swift Кріс Латтнер
//  JS Брендан Ейх
//  Java Джеймс Гослінг
//  Python Гвідо ван Россум

// const a = prompt("Введіть мову програмування");
// switch (a) {
//   case "PHP":
//     console.log(`${a} Расмус Лердорф`);
//     break;
//   case "C#":
//     console.log(
//       `${a} група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота`
//     );
//     break;
//   case "Swift":
//     console.log(`${a} Кріс Латтнер`);
//     break;
//   case "JS":
//     console.log(`${a} Брендан Ейх`);
//     break;
//   case "Java":
//     console.log(`${a} Джеймс Гослінг`);
//     break;
//   case "Python":
//     console.log(`${a} Гвідо ван Россум`);
//     break;
//   default:
//     console.log("Я такого не знаю!");
// }

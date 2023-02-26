//Example 1
//Зібрати в allTopics масив всіх предметів всіх курсів
//Виконати фільтрацію, залишивши в uniqueTopics тільки унікальні елементи

// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Function",
//       "Git",
//       "Conditions",
//       "Classes",
//       "GitHub",
//       "DOM",
//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Git",
//       "Promises",
//       "AJAX",
//       "GitHub",
//     ],
//   },
// ];

// const allTopics = courses.flatMap((course) => course.topics);
// //console.log(allTopics);

// const uniqueTopics = allTopics.filter((allTopic, index, array) => {
//   //console.log(index);
//   //console.log(array);
//   return array.indexOf(allTopic) === index;
// });
// console.log(uniqueTopics);

//Example 2
//Призначити знижку 20% на фрукти в масиві,
//Присвоїти ID для кожного продукту

// const fruits = [
//   { name: "apple", price: 200 },
//   { name: "orange", price: 300 },
//   { name: "grapes", price: 750 },
// ];

// const fruitsDiscounts = fruits.map((fruit) => {
//   return { ...fruit, price: fruit.price * 0.8, id: Date.now() };
// });

// console.log(fruitsDiscounts);

//Example 3
//Повернути об'єкт у якому вказується кількість тегів

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

//Варіант 1 вирішення
// const allTags = tweets
//   .flatMap((tweet) => tweet.tags)
//   .reduce((acc, tag) => {
//     // console.log(acc);
//     // console.log(tag);
//     return { ...acc, [tag]: acc[tag] ? acc[tag] + 1 : 1 };
//   }, {});
// console.log(allTags);

//Варіант 2 вирішення

// const allTags = tweets
//   .reduce((acc, tweet) => {
//     //console.log(tag);
//     return [...acc, ...tweet.tags];
//   }, [])
//   .filter((element, index, array) => {
//     return array.indexOf(element) === index;
//   });
// console.log(allTags); //отрумуємо масив унікальних tag елементів

//TODO:==============================================
// Даний масив із числами. Залишіть у ньому лише позитивні числа.
// Потім витягніть квадратний корінь і цих чисел.

// const array = [121, -2, 225, 0, 4, -5, 36, -11];

// const filter = array.filter((arr) => arr > 0).map((arr) => Math.sqrt(arr));
// console.log(filter);

//TODO:==============================================
//Створення масиву значень Фаренгейта із масиву значень Цельсія

// let celsius = [-15, -5, 0, 10, 16, 20, 24, 32];

// const transform = celsius.map((cel) => cel * 1.8 + 35);
// console.log(transform);

//TODO:==============================================
//Виконай рефакторинг makeDish так, щоб не потрібно було
// Щоразу передавати ім'я шефа.
//Напишіть функцію makeShef(shefName), яка повертає функцію
//makeDish(dish), що пам'ятає ім'я шефа під час її виклику

// const makeDish = function (shefName, dish) {
//   return console.log(`${shefName} is cooking ${dish}`);
// };

// const makeShef = function (name) {
//   return function makeDish(dish) {
//     console.log(`${name} is cooking ${dish}`);
//   };
// };
// const alex = makeShef(`Alex`);
// console.log(typeof alex);
// alex(`Fish`);

//TODO:==============================================
//Напишіть функцію savePassword(password), яка приймає
//пароль і повертає внутрішню функцію, що приймає
//рядок і повертає буль true, якщо рядок збігається зі збереженим
//паролем і false - якщо не збігається

// const savePassword = function (password) {
//   return (ourPas) => password === ourPas;
// };

// const password = savePassword(27);
// console.log(password(24));

// /TODO:==============================================
//Напишіть функцію для зберігання знижки. Функція повертає
//Іншу функцію, яка приймає суму покупки
//і повертає фінальну суму із збереженою знижкою.

// const saveDisount = (discount) => {
//   return (orderTotal) => {
//     return orderTotal - orderTotal * (discount / 100);
//   };
// };

// const premiumDiscunt = saveDisount(10);

// console.log(premiumDiscunt(100));

//TODO:==============================================
//Напишіть функцію makeCounter, яка повертає іншу
//функцію, яка вважає та логує кількість своїх викликів
//

// const makeCounter = function () {
//   let newCounter = 0;

//   return () => (newCounter += 1);
// };

// const counter = makeCounter();

// counter();
// counter();
// counter();

// console.log(counter());

//TODO:==============================================
//Напишіть функцію each(array, callback), яка
//першим параметром приймає масив, а другим - функцію,
//Яка застосовується до кожного елементу масиву.
//Функція each повинна повернути новий масив, елементами
//якого будуть результати виклику callback
//callback функції повинна множити елементи на 2

// const each = (array, callback) => {
//   const newArray = [];

//   for (let i = 0; i < array.length; i += 1) {
//     //console.log(array[i]);
//     //callback(array[i]);

//     newArray.push(callback(array[i]));
//   }

//   return newArray;
// };

// const newEach = (value) => {
//   return value * 2;
// };

// //console.log(newEach(5));
// const array = [3, 5, 6, 34, 8, 83, 12, 34];
// console.log(each(array, newEach));

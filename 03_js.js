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

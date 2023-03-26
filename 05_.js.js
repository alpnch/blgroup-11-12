/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/

// const btnCheckText = document.querySelector(`#alertButton`);
// const input = document.querySelector(`#alertInput`);

// btnCheckText.addEventListener(`click`, checkText);

// function checkText(e) {
//   console.dir(input.value);
// }

/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

// const btnSwapText = document.querySelector(`#swapButton`);

// const leftSwapInput = document.querySelector(`#leftSwapInput`);
// const rightSwapInput = document.querySelector(`#rightSwapInput`);

// btnSwapText.addEventListener(`click`, swapText);

// function swapText() {
//   const leftInput = leftSwapInput.value;
//   const rightInput = rightSwapInput.value;
//   leftSwapInput.value = rightInput;
//   rightSwapInput.value = leftInput;
// }

/*
Завдання 3!!!!!!!!!!!(проект)
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

// const btnHid = document.querySelector(`#passwordButton`);
// const input = document.querySelector(`#passwordInput`);
// btnHid.addEventListener(`click`, hidFunc);

// function hidFunc() {
//   if (input.type === `password`) {
//     btnHid.textContent = `Приховати`;
//     input.type = `text`;
//   } else {
//     btnHid.textContent = `Розкрити`;
//     input.type = `password`;
//   }
// }

/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів, кнопка "Збільшити" - більше на 10 пікселів.
*/

// const upSize = document.querySelector(`#increase`);
// const downSize = document.querySelector(`#decrease`);
// const box = document.querySelector(`#box`);

// upSize.addEventListener(`click`, upSizeFunc);
// function upSizeFunc() {
//   let css = getComputedStyle(box).width;
//   let numEl = parseInt(css);

//   box.style.width = numEl + 10 + `px`;
//   box.style.height = numEl + 10 + `px`;
// }

// downSize.addEventListener(`click`, downSizeFunc);

// function downSizeFunc() {
//   let css = getComputedStyle(box).width;
//   let numEl = parseInt(css);

//   box.style.width = numEl - 10 + `px`;
//   box.style.height = numEl - 10 + `px`;
// }
//TODO:======================
// Завдання  5
//  Створіть HTML сторінку з табличкою,
//  яка містить список продуктів.Кожен рядок у
//  табличці повинен містити назву продукту та його ціну.
//  При натисканні на будь - який рядок у табличці відобразіть
//  повідомлення з назвою продукту та його ціною.

// const table = document.querySelector(`#productTable`);
// const details = document.querySelector(`#productDetails`);

// table.addEventListener(`click`, foundRow);

// function foundRow(e) {
//   if (e.target.tagName !== `TD`) {
//     return;
//   }
//   const founded = e.target.parentNode;
//   const price = founded.cells[1].textContent;
//   const productNme = founded.cells[0].textContent;
//   details.textContent = `цiна така ${price} продукт такий ${productNme}`;
// }
//TODO:======================
//ЗАДАЧА 6

// Написати функцію, яка буде створювати список
// подій клавіатури event.key та event.code
// Додати класи на список eventList, на елементи eventCode та eventKey

// const eventThumb = document.querySelector(".eventThumb");

// document.addEventListener("keydown", keyPress);

// function keyPress({ key, code }) {
//   const markup = `
//     <ul class="eventList">
//     <li class="eventKey">${key}</li>
//     <li class="eventCode">${code}</li>
//     </ul>`;

//   eventThumb.insertAdjacentHTML("beforeend", markup);
// }
//TODO:======================
//ЗАДАЧА 7
// Взяти попереднє завдання з Зоопарком та вивести звірів,
//їх тип та особливості в DOM.
// Додати до списку клас animalList.На елемент списку animalElement

// class Animal {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }
//   getInfo() {
//     return `Name: ${this.name}, Type: ${this.type}`;
//   }
// }

// class Bird extends Animal {
//   constructor(name, type, color) {
//     super(name, type);
//     this.color = color;
//   }

//   getInfo() {
//     return `${super.getInfo()}, Color: ${this.color}`;
//   }
// }

// class Hunter extends Animal {
//   constructor(name, type, teeth) {
//     super(name, type);
//     this.teeth = teeth;
//   }

//   getInfo() {
//     return `${super.getInfo()}, Teeth: ${this.teeth}`;
//   }
// }

// class Zoo {
//   constructor() {
//     this.animals = [];

//     this.zooWrapper = document.querySelector(".zooWrapper");

//     this.listAnimals = document.createElement("ul");
//   }

//   markup() {
//     this.animals.forEach((animal) => {
//       const animalElement = document.createElement("li");
//       const animalName = document.createElement("p");
//       const animalType = document.createElement("p");
//       const animalDesc = document.createElement("p");

//       animalName.textContent = `name ${animal.name}`;
//       animalType.textContent = `type ${animal.type}`;

//       if (animal.teeth) {
//         animalDesc.textContent = `teeth ${animal.teeth}`;
//       }
//       if (animal.color) {
//         animalDesc.textContent = `color ${animal.color}`;
//       }

//       animalElement.append(animalName, animalType, animalDesc);
//       animalElement.classList.add("animalElement");

//       this.listAnimals.append(animalElement);
//       this.listAnimals.classList.add("animalList");

//       this.zooWrapper.append(this.listAnimals);
//     });
//   }

//   addAnimal(animal) {
//     this.animals.push(animal);
//   }

//   listAnimals() {
//     this.animals.forEach((animal) => {
//       console.log(animal.getInfo());
//     });
//   }
// }

// const sparrow = new Bird("orange", "street", "grey");

// const zoo = new Zoo();

// zoo.addAnimal(sparrow);

// const tiger = new Hunter("boy", "tiger", "broken");

// zoo.addAnimal(tiger);

// //zoo.listAnimals();

// zoo.markup();

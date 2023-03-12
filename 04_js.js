//TODO:=============================================
//Напиши клас Client який створює об'єкт
//з ​​властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email

// class Client {
//   #login;
//   #email;
//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }
//   get email() {
//     return { email: this.#email, login: this.#login };
//   }
//   set email(newEmail) {
//     return (this.#email = newEmail);
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     return (this.#login = newLogin);
//   }
// }

// const orange = new Client(`mettteora`, `mrhens2013@gmail.com`);
// console.log(orange.email);

//TODO:=============================================
//Напиши клас Notes який управляє колекцією нотаток у
//властивості items.
//Нотатка - це об'єкт із властивостями text і priority.
//Додай класу статичний метод Priopity,
//який буде повертати об'єкт із пріоритетами HIGHT та LOW.
//Додай методи addNote(note), removeNote(text)
//updatePriority(text, newPriority)

// class Notes {
//   static Priority() {
//     return { HIGTH: `higth`, LOW: `low` };
//   }

//   constructor() {
//     this.items = [];
//   }

//   addNote(note) {
//     return this.items.push(note);
//   }
//   removeNote(text) {
//     const index = this.items.findIndex((item) => item.text === text);

//     if (index !== -1) {
//       this.items.splice(index, 1);
//     }
//   }
//   updatePriority({ text, newPriority }) {
//     const index = this.items.findIndex((item) => item.text === text);
//     if (index !== -1) {
//       this.items[index].priority = newPriority;
//     }
//   }
// }

// const noteOne = new Notes();

// noteOne.addNote({ text: `Hello World`, priority: Notes.Priority().HIGTH });
// noteOne.addNote({ text: `Hello`, priority: Notes.Priority().LOW });
// noteOne.addNote({ text: `Hel`, priority: Notes.Priority().HIGTH });
// // noteOne.removeNote(`Hello World`);
// noteOne.updatePriority({
//   text: `Hello World`,
//   newPriority: Notes.Priority().LOW,
// });
// console.table(noteOne.items);

//TODO:======================
// Створи клас для калькулятора, який має такі методи:
// метод number, який набуває початкового значення для наступних операцій
// Геттер, який повертає фінальний результат усіх операцій, проведених із числом
// методи add, substruct, divide, multiply

// class Calculator {
//   constructor() {
//     this.number = 0;
//   }

//   get summery() {
//     return this.number;
//   }

//   addNumber(number) {
//     this.number += number;
//   }

//   substuctNumber(number) {
//     this.number -= number;
//   }

//   divideNumber(number) {
//     if (number !== 0) {
//       this.number /= number;
//     }
//   }
//   multiplyNumber(number) {
//     this.number *= number;
//   }
// }

// const calc = new Calculator();
// calc.addNumber(5);
// calc.addNumber(15);
// calc.substuctNumber(8);
// calc.substuctNumber(15);
// calc.divideNumber(2);
// calc.divideNumber(4);
// calc.multiplyNumber(12);
// calc.multiplyNumber(7);

// console.log(calc.summery);

// Задача: написати клас, який буде представляти зоопарк тварин.
// У зоопарку повинні бути різні типи тварин, такі як ссавці, птахи, рептилії тощо.
// Кожен тип тварин повинен мати свої властивості та методи, наприклад,
//  методи для отримання інформації про тварину та для годівлі тварин.
//  Крім того, зоопарк повинен мати метод для додавання тварин до списку та метод для виведення списку всіх тварин у зоопарку.

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

// zoo.listAnimals();

// Задача: Створіть клас "Круг", який має властивості радіуса та діаметру,
//а також методи для обчислення площі та довжини кола.

// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//     this.diameter = radius * 2;
//   }

//   getArea() {
//     return this.radius ** 2 * Math.PI;
//   }

//   getFerence() {
//     return this.radius * Math.PI * 2;
//   }
// }

// const circle = new Circle(5);
// console.log(circle.getArea());
// console.log(circle.getFerence());

//Home task
TODO:=============================================
Напиши class CarsManager  який створює об'єкти
Для управління салону автомобілів. Використати приватну змінну cars
Додай методи класу:
getModels() - повертайте масив усіх моделей
changeModel(oldModelName, newModelName) - Замінює стару модель на ному
getTotalPrice() - отримує суму усіх автомобілів
getMake(make) - повертає масив виробника

const vehicles = [
  { make: "Honda", model: "CR-V", type: "suv", price: 24045 },
  { make: "Toyota", model: "4Runner", type: "suv", price: 34210 },
  { make: "Ford", model: "F-150", type: "truck", price: 27110 },
  { make: "Honda", model: "Accord", type: "sedan", price: 22455 },
  { make: "Mazda", model: "CX-9", type: "suv", price: 31520 },
  { make: "Toyota", model: "Sequoia", type: "suv", price: 45560 },
  { make: "Ford", model: "Fusion", type: "sedan", price: 22120 },
  { make: "Mazda", model: "Mazda 6", type: "sedan", price: 24195 },
  { make: "Ford", model: "Explorer", type: "suv", price: 31660 },
  { make: "Toyota", model: "Tacoma", type: "truck", price: 24320 },
];


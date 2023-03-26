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

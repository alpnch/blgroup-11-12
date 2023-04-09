// // Якщо імейл і пароль користувача збігаються, зберігайте дані з форми при сабмите
// // у локальне сховище і змінюй кнопку login на logout і роби поля введення
// // Недоступними зміни.

// // При перезавантаженні сторінки, якщо користувач залогінений, ми маємо бачити logout-кнопку
// // та недоступні для зміни поля з даними користувача.
// // Клік по кнопці logout повертає все до початкового вигляду і видаляє дані користувача
// // З локального сховища.

// // Якщо введені дані не збігаються з потрібними даними, викликати аlert і
// // повідомляти про помилку.

// const USER_DATA = {
//   email: "user@mail.com",
//   password: "secret",
// };

// const refs = {
//   form: document.querySelector(`#login-form`),
// };
// const infoKey = `info`;
// const userData = JSON.parse(localStorage.getItem(infoKey));

// const { email, password, button } = refs.form.elements;
// if (userData) {
//   onLogin();
// }
// refs.form.addEventListener(`submit`, checkData);

// function checkData(e) {
//   e.preventDefault();
//   if (button.textContent === `logout`) {
//     return onLogOut();
//   }
//   if (
//     USER_DATA.email === email.value &&
//     USER_DATA.password === password.value
//   ) {
//     const data = { dataEmail: email.value, dataPass: password.value };
//     localStorage.setItem(infoKey, JSON.stringify(data));

//     onLogin();
//     refs.form.reset();
//   } else {
//     alert(`ERROR`);
//   }
//   console.log(email);
// }

// function onLogin() {
//   button.textContent = `logout`;
//   email.disabled = true;
//   password.disabled = true;
// }

// function onLogOut() {
//   localStorage.removeItem(infoKey);
//   email.disabled = false;
//   password.disabled = false;
//   button.textContent = `login`;
// }

// ЗАДАЧА 2

// Створи перелік справ.
// Є інпут, в який вводиться назва завдання.
// Після натискання на кнопку "Додати" завдання додається до списку #list.
// Поруч із кожним завданням знаходиться кнопка "Видалити", щоб можна було
// Забрати завдання зі списку.
// Список із завданнями має бути доступним після перезавантаження сторінки.

const form = document.getElementById("task-form");

const taskList = document.getElementById("task-list");

const input = document.querySelector("input");

const tasksKey = "tasks";

let tasks = JSON.parse(localStorage.getItem(tasksKey)) || [];
// const taskSave = JSON.parse(localStorage.getItem(tasksKey));
// if (taskSave) {
// renderTasks();
// }
renderTasks();
form.addEventListener("submit", addList);

function addList(e) {
  e.preventDefault();
  const task = input.value;
  if (task) {
    tasks.push(task);
    renderTasks();
    saveTasks();
    input.value = "";
    console.log(tasks);
  }
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task;
    console.log(task);
    taskList.appendChild(li);
  });
}

function saveTasks() {
  localStorage.setItem(tasksKey, JSON.stringify(tasks));
}

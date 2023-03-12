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

class Notes {
  static Priority() {
    return { HIGTH: `higth`, LOW: `low` };
  }

  constructor() {
    this.items = [];
  }

  addNote(note) {
    return this.items.push(note);
  }
  removeNote(text) {
    const index = this.items.findIndex((item) => item.text === text);

    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
  updatePriority({ text, newPriority }) {
    const index = this.items.findIndex((item) => item.text === text);
    if (index !== -1) {
      this.items[index].priority = newPriority;
    }
  }
}

const noteOne = new Notes();

noteOne.addNote({ text: `Hello World`, priority: Notes.Priority().HIGTH });
noteOne.addNote({ text: `Hello`, priority: Notes.Priority().LOW });
noteOne.addNote({ text: `Hel`, priority: Notes.Priority().HIGTH });
// noteOne.removeNote(`Hello World`);
noteOne.updatePriority({
  text: `Hello World`,
  newPriority: Notes.Priority().LOW,
});
console.table(noteOne.items);

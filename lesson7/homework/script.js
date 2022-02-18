// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

user1 = new User(34282, "Ivan", "Ivanov", "ivaIvanov@mail.ru");
user2 = new User(53575, "Oleg", "Smirnov", "osmir@gmail.com");
user3 = new User(43534, "Olga", "Fisun", "fisola@ukr.net")
user4 = new User(33674, "Ira", "Vong", "ivong@bk.ru");
user5 = new User(62665, "David", "Getta", "dgetta@gmail.com");
user6 = new User(98764, "Paul", "VanDyik", "vandit@mail.com")
user7 = new User(29088, "Martin", "Garrix", "marix@mail.ru");
user8 = new User(35839, "Stew", "Aoki", "asaoki@gmail.com");
user9 = new User(43338, "Carl", "Cox", "ccarl@ukr.net")
user10 = new User(14345, "Sander", "Dorn", "sdorn@mail.ru");


let pusherInArray = (...args) => {
    let array = [];
    for (let arg of args) {
        array.push(arg)
    }
    return array;
}

let Users = pusherInArray(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10)

//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(Users.filter(value => (value.id % 2 === 0)))
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(Users.sort((a, b) => (a.id - b.id)));
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    id;
    name;
    surname;
    email;
    phone;
    order;

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

client1 = new Client(34282, "Ivan", "Ivanov", "ivaIvanov@mail.ru", 56673952, ['banan', 'ananas', 'someone']);
client2 = new Client(53575, "Oleg", "Smirnov", "osmir@gmail.com", 43567363, ['laptop', 'phone']);
client3 = new Client(43534, "Olga", "Fisun", "fisola@ukr.net", 563756893, ['pen', 'pencil']);
client4 = new Client(33674, "Ira", "Vong", "ivong@bk.ru", 3867305, ['biskit', 'coocies']);
client5 = new Client(62665, "David", "Getta", "dgetta@gmail.com", 4385335450, ['iphone', 'xiomi']);
client6 = new Client(98764, "Paul", "VanDyik", "vandit@mail.com", 48357323, ['oil', 'benzyn', 'xiomi', 'xiomi']);
client7 = new Client(29088, "Martin", "Garrix", "marix@mail.ru", 5734602, ['book', 'copybook']);
client8 = new Client(35839, "Stew", "Aoki", "asaoki@gmail.com", 345663, ['pen', 'pencil']);
client9 = new Client(43338, "Carl", "Cox", "ccarl@ukr.net", 6346322, ['phone']);
client10 = new Client(14345, "Sander", "Dorn", "sdoclientail.ru", 9874522, ['oil', 'benzyn']);
clients = pusherInArray(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(clients.sort((a, b) => a.order.length - b.order.length))
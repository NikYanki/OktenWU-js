// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
function Car(brend, model, maxSpeed, vEngine) {
    this.brend = brend;
    this.model = model;
    this.maxSpeed = maxSpeed;
    this.vEngine = vEngine;
    this.showDrive = function () {
        console.log(`двигаемся со скоростью ${this.maxSpeed} в час`);
    }
    this.showInfo = function () {
        for (const key in this) {
            if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
        }
    };

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
    }
    this.changeYear = function (newValue) {
        this.yearManufact = newValue;
    }
    this.addDriver = function (driver) {
        this.driver = driver
    }
}

let car1 = new Car(`honda`, `NSX`, 270, 3)
car1.showDrive();
car1.showInfo();
car1.increaseMaxSpeed(280)
car1.addDriver(`Nikolay`);
car1.changeYear(1997)
car1.showInfo();
console.log(car1);
car1.showDrive();
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна
// швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
class Car1 {
    brend
    model
    maxSpeed
    vEngine

    constructor(brend, model, maxSpeed, vEngine) {
        this.brend = brend;
        this.model = model;
        this.maxSpeed = maxSpeed;
        this.vEngine = vEngine;
        this.showDrive = function () {
            console.log(`двигаемся со скоростью ${this.maxSpeed} в час`);
        }
        this.showInfo = function () {
            for (const key in this) {
                if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
            }
        };

        this.increaseMaxSpeed = function (newSpeed) {
            this.maxSpeed = newSpeed;
        }
        this.changeYear = function (newValue) {
            this.yearManufact = newValue;
        }
        this.addDriver = function (driver) {
            this.driver = driver
        }
    }
}

car2 = new Car(`nissan`, `Silvia s15`, 250, 2.6)
car2.showDrive();
car2.showInfo();
car2.increaseMaxSpeed(280)
car2.addDriver(`Nikolay`);
car2.changeYear(1999)
car2.showInfo();
console.log(car2);
car2.showDrive();
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Popelushka {
    name;
    age;
    footSize;

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    name;
    age;
    ShoozSize;

    constructor(name, age, ShoozSize) {
        this.name = name;
        this.age = age;
        this.ShoozSize = ShoozSize;
    }
}

P1 = new Popelushka("Pamela", 26, 32);
P2 = new Popelushka("Silvia", 26, 33);
P3 = new Popelushka("Roza", 26, 34);
P4 = new Popelushka("Agness", 26, 35);
P5 = new Popelushka("Alexandra", 26, 36);
P6 = new Popelushka("Jeniffer", 26, 37);
P7 = new Popelushka("Eva", 26, 38);
P8 = new Popelushka("Margaret", 26, 39);
P9 = new Popelushka("Katrina", 26, 31);
P10 = new Popelushka("Olvia", 26, 33);
let list = []
list.push(P1);
list.push(P2);
list.push(P3);
list.push(P5);
list.push(P6);
list.push(P7);
list.push(P8);
list.push(P9);
list.push(P10);
prince = new Prince("Peter", 27, 37);

let findPopelusku = (list, prince) => {
    for (let popelushka of list) {
        if (popelushka.footSize === prince.ShoozSize) {
            console.log(`Имя попелюшки ${popelushka.name}`);
        }

    }
}
findPopelusku(list, prince)


console.log(list.find((popelushka) => (popelushka.footSize === prince.ShoozSize)))




/* - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
Вивести кожну змінну за допомогою: console.log , alert, document.write
- Переприсвоїти кожній змінній з завдання значення на довільне.
    Вивести кожну змінну за допомогою: console.log , alert, document.write
- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
    Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    let a = 100; let b = '100'; let c = true;
- Визначити відповідний оператор в виразах що б вийшов відповідний результат.
    В однакових виразах не використовувати однакові оператори!!!
    5 ? 6 -> true
5 ? 6 -> false
5 ? 6 -> false
5 ? 6 -> false
10 ? 10 -> true
10 ? 10 -> true
10 ? 10 -> false
10 ? 10 -> false
10 ? 10 -> false
123 ? '123' -> false
123 ? '123' -> true

- Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
    let str = "20";
let a = 5;
document.write(str + a + "<br/>");
document.write(str - a + "<br/>");
document.write(str * "2" + "<br/>");
document.write(str / 2 + "<br/>");*/

//часть 1
let string1, string2, srting3, string4;
string1 = "hello";
string2 = "owu";
srting3 = "com";
string4 = "ua";
let integer1, integer2, integer3, integer4, integer5;
integer1 = 1;
integer2 = 10;
integer3 = -999;
integer4 = 123;
integer5 = 16;
let double1, double2;
double1 = 3.14;
double2 = 2.7;
let boolean1, boolean2;
boolean1 = true;
boolean2 = false;


let array = [string1, string2, srting3, string4, integer1, integer2, integer3, integer4, integer5, double1, double2, boolean1, boolean2];
for (let i = 0; i < 13; i++) {
    alert(array[i]);
    console.log(array[i]);
    document.write(i + " элемент массива: " + array[i] + "<br />");
}
// часть 2
string1 = `it`;
string2 = `is`;
srting3 = `web`;
string4 = `course`;
integer1 = 5;
integer2 = 4;
integer3 = -3;
integer4 = -2;
integer5 = 1;
double1 = 4.4;
double2 = 1.1;
boolean1 = false;
boolean2 = true;
let array2 = [string1, string2, srting3, string4, integer1, integer2, integer3, integer4, integer5, double1, double2, boolean1, boolean2];


let j = 0;
do {
    alert(array2[j]);
    console.log(array2[j]);
    document.write(j + " элемент массива: " + array2[j] + "<br />");
    j++;
}
while (j < 13);
//часть 3
let first_name, middle_name, last_name, person;
first_name = `Янковой`;
middle_name = `Николай`;
last_name = `Викторович`;
person = (`My name is: ` + first_name + ` ` + middle_name + ` ` + last_name);
const Name = prompt(`Как вас зовут`, ``);
const ThirtName = prompt(`Ваше отчество`, ``);
const Age = prompt(`Ваш возраст`, ``);
document.write(`Поздравляю ` + Name + ` ` + ThirtName + `. Тебе ` + Age + ` лет`);
// часть 4
let a, b, c;
a = 100;
b = `100`;
c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
//часть 5
5 !== 6 //-> true
5 > 6 //-> false
5 === 6 //-> false
5 >= 6 //-> false
10 <= 10 //-> true
10 === 10 //-> true
10 !== 10 //-> false
10 > 10 //-> false
10 < 10 //-> false
123 === '123' //-> false
123 == '123' //-> true
//  часть 6
let str = "20";
let z = 5;
document.write(str + z + "<br/>");//205
document.write(str - z + "<br/>");//15
document.write(str * "2" + "<br/>");//40
document.write(str / 2 + "<br/>");//10

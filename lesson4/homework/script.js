/*
- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
- створити функцію яка обчислює та повертає площу кола з радіусом r
- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
- створити функцію яка приймає масив та виводить кожен його елемент
- створити функцію яка створює параграф з текстом. Текст задати через аргумент
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

 */
function findAreaRectangle(height, width) {
    return height * width;
}

function findAreaCircle(radius) {
    return 3.14 * (radius ** 2);
}

function findAreaCylinder(radius, height) {
    return 3.14 * (radius ** 2) * 2 + 2 * 3.14 * radius * height;
}

function showInfoArray(array) {
    document.write("{ ");
    for (let arrayElement of array) {
        document.write(arrayElement + " ");
    }
    document.write("}");
}

let array = [1, 2, 3, 4, 5, 6, 7];
showInfoArray(array);

function writeDownInParagraph(string) {
    document.write(`<p>${string}</p>`);
}

writeDownInParagraph("hello world")

function writeDownInList(string) {
    document.write("<ul>");
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${string}</li>` + "</br>");
    }
    document.write("</ul>");
}

function writeDownInListWithCount(string, count) {
    document.write("<ul>");
    for (let i = 0; i < count; i++) {
        document.write(`<li>${string}</li>` + "</br>");
    }
    document.write("</ul>");
}

function writeDownArrayInList(array) {
    document.write("<ul>");
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>` + "</br>");
    }
    document.write("</ul>");
}

writeDownArrayInList(array)
let users = [
    {id: 3, name: 'vasya', age: 15},
    {id: 1, name: 'petya', age: 16},
    {id: 2, name: 'valera', age: 17},
    {id: 4, name: 'volodya', age: 18}
];

function listInOut(array) {
    for (let i = 0; i < array.length; i++) {
        document.write("<ul>");
        document.write(`<li>${array[i].id}</li>` + "</br>");
        document.write(`<li>${array[i].name}</li>` + "</br>");
        document.write(`<li>${array[i].age}</li>` + "</br>");
        document.write("</ul>");
    }
}

listInOut(users);
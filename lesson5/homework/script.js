// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою
let findAreaRectangle = (a, b) => a * b;
console.log(findAreaRectangle(10, 5));
// - створити функцію яка обчислює та повертає площу кола
let findAreaCircle = radius => 3.14 * (radius ** 2);
console.log(findAreaCircle(10));
// - створити функцію яка обчислює та повертає площу циліндру
let findAreaCilindr = (radius, height) => 2 * 3.14 * radius * height + 2 * 3.14 * (radius ** 2);
// - створити функцію яка приймає масив та виводить кожен його елемент
let array = [2, 4, 5, 6, 7, 89, 6];
let showArray = (array) => {
    document.write('[ ');
    for (let arrayElement of array) {
        document.write(arrayElement + ' ');
    }
    document.write(']<br>')
}
showArray(array);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let createParagr = (string) => document.write(`<p>${string}</p><br>`);
createParagr('hello world')
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let createUl = (string) => {
    document.write('<ul>');
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${string}</li>`)
    }
    document.write('</ul><br>');
};
createUl('Volodya');
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let createUlWithCount = (string, count) => {
    document.write('<ul>');
    for (let i = 0; i < count; i++) {
        document.write(`<li>${string}</li>`)
    }
    document.write('</ul><br>');
};
createUlWithCount('Valera', 7);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let writeDownArrayInList = (array) => {
    document.write("<ul>");
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`);
    }
    document.write("</ul><br>");
}
let array1 = [1, 3, true, false, 'smit']
writeDownArrayInList(array1)
//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {id: 3, name: 'vasya', age: 15},
    {id: 1, name: 'petya', age: 16},
    {id: 2, name: 'valera', age: 17},
    {id: 4, name: 'volodya', age: 18}
];

function listInOut(array) {
    for (let i = 0; i < array.length; i++) {
        document.write(`<div> id :${array[i].id}. Name :${array[i].name}. Age :${array[i].age}</div>`);

    }
}

listInOut(users);

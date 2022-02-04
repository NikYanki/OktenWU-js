// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let array = [];
for (let i = 0; i < 50; i++) {
    array[i] = (Math.floor(Math.random() * 100)) * 2
    document.write('index' + i + " " + array[i] + "</br>")
}
let array1 = [];
for (let i = 0; i < 50; i++) {
    array1[i] = i * 10 + 1;
    console.log(array1[i]);
}
let array2 = [];
for (let i = 0; i < 20; i++) {
    array1[i] = Math.floor(Math.random() * 100);
    console.log(array1[i]);
}
let array3 = [];
for (let i = 0; i < 20; i++) {
    array1[i] = Math.floor(Math.random() * (732 - 8)) + 8;
    console.log(array1[i]);
}
let array11 = [1, 2, 3, 5, 7, 9, 56, 8, 67];
// 2. Вивести за допомогою console.log кожен третій елемен
for (let i = 0; i < array11.length; i++) {
    if (i !== 0 && i % 3 === 0) {
        console.log(array11[i - 1]);
    }
}
//3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
let array12 = [1, 2, 3, 5, 7, 9, 56, 1, 2, 3, 5, 7, 9, 56, 1, 2, 3, 5, 7, 9, 56, 1, 2, 3, 5, 7, 9, 56,];
for (let i = 0; i < array12.length; i++) {
    if (i !== 0 && i % 3 === 0 && array12[i - 1] % 2 === 0) {
        console.log(array12[i - 1]);
    }
}
//4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

let array13 = [];
for (let i = 0; i < array12.length; i++) {
    if (i !== 0 && i % 3 === 0 && array12[i - 1] % 2 === 0) {
        console.log(array12[i - 1]);
        array13.push(array12[i - 1]);
    }
}
console.log(array13);
//5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
for (let i = 0; i < array11.length; i++) {
    if (array11[i] % 2 === 0) {
        console.log(array11[i - 1])
    }
}
//6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let check = [100, 250, 50, 168, 120, 345, 188];
let sum = 0;
for (let number of check) {
    sum += number;
}
console.log(sum)
//7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let array14 = [];
let array15 = [];
for (let i = 0; i < 5; i++) {
    array14[i] = (Math.floor(Math.random() * 10))
    array15.push(array14[i] * 5);
}
console.log(array14);
console.log(array15);
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let array16 = Array(10)
array16[0] = 33
for (let i = 1; i < array16.length; i++) {
    array16[i] = array16[--i] + 11;
    ++i;
    if (i % 4 === 0) {
        array16[i] = !!array16[i];
    } else if (i % 4 === 3) {
        array16[i] += 'string';
    } else if (i % 4 === 2) {
        array16[i] = !!!array16[i];
    } else if (i % 4 === 1) {
        array16[i] = array1
    }
}
let array17 = [];
for (let i = 0; i < array16.length; i++) {
    if (typeof array16[i] === "number") {
        array17.push(array16[i]);
    }
}
console.log(array17)
//- Дано 2 масиви з рівною кількістю об'єктів.
//Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
let usersWithCities = [];
for (let i = 0; i < usersWithId.length; i++) {
    usersWithCities.push(usersWithId[i]);
    usersWithCities[i].adress = null;
    for (let j = 0; j < citiesWithId.length; j++) {
        if (usersWithCities[i].id === citiesWithId[j].user_id) {
            usersWithCities[i].adress = citiesWithId[j];
        }
    }
}
console.log(usersWithCities)
//Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
for (let i = 0; i < array12.length; i++) {
    if (array12[i] % 2 === 0) {
        console.log(array12[i]);
    }
}
//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let array20 = Array(10);

for (let i = 0; i < array20.length; i++) {
    array20[i] = i + 10;
    //можно сразу здесь array21.push(array20[i]);
}
let z = 0, array21 = [];
while (z < array20.length) {
    array21.push(array20[z]);
    z++
}
console.log(array21);
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let array30 = ['a', 'b', 'c'];
let word1 = "";
let word2 = "";
let word3 = "";
for (let i = 0; i < array30.length; i++) {
    word1 += array30[i];
}
console.log(word1);
let x = 0;
while (x < array30.length) {
    word2 += array30[x];
    x++;
}
console.log(word2);
for (let s of array30) {
    word3 += s;
}
console.log(word3)
//массив с 5-и чисел
let array1 = [];
let array2 = [];
let array3 = [];
array1[0] = 0;
for (let i = 1; i < 5; i++) {
    array1[i] = array1[--i] + 10;
    ++i;
}
for (let el of array1) {
    console.log(el + ' ');
}
//массив с 5-и строк
array2[0] = 'bla';
let i = 1;
while (i < 5) {
    array2[i] = array2[--i] + '-bla';
    i += 2;
}
for (let el of array2) {
    console.log(el + '  ');
}
//массив с 5-и микс-элементов
array3[0] = 33
for (let j = 1; j < 5; j++) {
    array3[j] = array3[--j] + 11;
    ++j;
    if (j % 3 === 0) {
        array3[j] = !!array3[j];
    } else if (j % 3 === 2) {
        array3[j] += 'string';
    }
}
for (let el of array3) {
    console.log(el + '  ' + typeof el);
}
// Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let array4 = [];
array4[0] = 123;
array4[1] = 'Hello world';
array4[2] = true;
array4[3] = array3;
for (let el of array4) {
    console.log(el + ' ' + typeof el);
}
//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let k = 0; k < 10; k++) {
    document.write(`<div class="aa">ab</div>`);
}
//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let k = 0; k < 10; k++) {
    document.write(`<div class="aa">${k}</div>`);
}
//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
i = 0;
while (i < 20) {
    document.write(`<h1>Hello world</h1>`);
    i++;
}
//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
i = 1
do {
    document.write(`<h1>Hello world ${i}</h1>`);
    i++
} while (i <= 20);
//Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let array5 = Array(10);
array5[--array5.length] = 100;
for (let j = array5.length - 1; j >= 0; j--) {
    array5[--j] = array5[++j] - 10;
}
for (let el of array5) {
    console.log(el)
}
//Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let array6 = Array(10);
array6[--array6.length] = "bla";
for (let j = array6.length - 1; j >= 0; j--) {
    array6[--j] = array6[++j] + '-bla';
}
for (let el of array6) {
    console.log(el + ' ')
}
//Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let array7 = Array(10)
array7[0] = 33
for (let j = 1; j < array7.length; j++) {
    array7[j] = array7[--j] + 11;
    ++j;
    if (j % 4 === 0) {
        array7[j] = !!array7[j];
    } else if (j % 4 === 3) {
        array7[j] += 'string';
    } else if (j % 4 === 2) {
        array7[j] = !!!array7[j];
    } else if (j % 4 === 1) {
        array7[j] = array1
    }
}
for (let el of array7) {
    console.log(el + '  ' + typeof el);
}
//Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
for (let el of array7) {
    if (typeof el === "boolean")
        console.log(el);
}
//Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (let el of array7) {
    if (typeof el === "number")
        console.log(el);
}
//Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (let el of array7) {
    if (typeof el === "string")
        console.log(el);
}
//Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let array8 = Array(10);
array8[0] = 1;
array8[1] = 'hello';
array8[2] = true;
array8[3] = array1;
array8[4] = false;
array8[5] = null;
array8[6] = 2;
array8[7] = 'world';
array8[8] = !!!2;
array8[9] = !!2;
for (let array8Element of array8) {
    console.log(array8Element + ' ' + typeof array8Element)
}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (j = 0; j < 10; j++) {
    console.log(j)
    document.write(j + "<br/>")
}
for (j = 10; j < 110; j++) {
    console.log(j)
    document.write(j + "<br/>")
}
for (j = 0; j < 200; j += 2) {
    console.log(j)
    document.write(j + "<br/>")
}
//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write*/
for (k = 1; k <= 100; k++) {
    if (k % 2 === 0) {
        console.log(k)
        document.write(k + "<br/>")
    }
}
for (k = 0; k < 100; k++) {
    if (k % 2 === 1) {
        console.log(k)
        document.write(k + "<br/>")
    }
}
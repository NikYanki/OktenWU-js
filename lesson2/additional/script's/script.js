// задание 1
let array = ['Ivan', 'Slavic', 'Gisha', 'Lera', 'Ira']
array.length > 3 ? console.log('Это юольшой массив в котором больше 3-х элементов') : console.log('Это малый маччив длинна которого меньше 3-х');
//задание 2
//вариант а
let a, b, c;
a = 4;
b = 2;
c = 3;
(a >= b && a <= c || a <= b && a >= c) ? console.log(a) : (b >= a && b <= c || b <= a && b >= c) ? console.log(b) : console.log(c);
//вариант б (пусть лучше думает комп)
let array2 = [];
array2.push(a);
array2.push(b);
array2.push(c);
array2.sort((a, b) => a - b);
console.log(array2[Math.floor(array2.length / 2)]);
//задание 3
let d, f, result;
d = 2
f = 1
d + f < 4 ? result = 'Мало' : result = 'Много';
console.log(result)
//задание 4
let num;
(num <= 100 && num >= -100) ? (num < 0) ? console.log('Число менше ноля') : (num > 0) ? console.log('Число болше ноля') : console.log('число равное нолю') : console.log('Что-то не так');
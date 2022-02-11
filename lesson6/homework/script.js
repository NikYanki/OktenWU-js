// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let showLength = string => string.length
console.log(showLength('hello world'));
console.log(showLength('lorem ipsum'));
console.log(showLength('javascript is cool'));
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let showUpperCase = string => string.toUpperCase();
console.log(showUpperCase('hello world'));
console.log(showUpperCase('lorem ipsum'));
console.log(showUpperCase('javascript is cool'));
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let showLowerCase = sting => sting.toLowerCase();
console.log(showLowerCase('HELLO WORLD'));
console.log(showLowerCase('LOREM IPSUM'));
console.log(showLowerCase('JAVASCRIPT IS COOL'));
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let clearSpaces = string => string.trim();
let str = ' dirty string   ';
console.log(clearSpaces(str))
console.log(str.length)
console.log(clearSpaces(str).length)
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str2 = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
let relayIntoArrays = string => string.split(" ");
console.log(relayIntoArrays(str2));

let showArray = (array) => {
    document.write('[ ');
    for (let arrayElement of array) {
        if (arrayElement !== array[array.length - 1]) {
            document.write(`'${arrayElement}', `);
        } else {
            document.write(`'${arrayElement}' `);
        }
    }
    document.write(']<br>')
}
showArray(relayIntoArrays(str2))
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

let flipAwayWith = (string, index) => string.substr(0, index);
document.write(flipAwayWith(str2, 7) + '<br>');
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
let str3 = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let insertDash = string => string.toUpperCase().split(' ').join('-');
document.write(insertDash(str3) + "<br>");
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let makeFirstLetterBigger = string => string[0].toUpperCase().concat(string.slice(1));
let str4 = 'каждый охотник желает знать';
document.write(makeFirstLetterBigger(str4) + "<br>")
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let capitalize = string => string.split(' ').map(word => word.charAt(0).toUpperCase().concat(word.slice(1))).join(' ');
document.write(capitalize(str4))

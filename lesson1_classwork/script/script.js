/*1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
Значення площі зберігати в змінній s.
6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
результат помістіть у змінну v.
7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).*/

//задание 1
let array = [];
for (i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * 50));
}
array.forEach(element => console.log(element));
let j = 0;
let summa = 0;
while (j < array.length) {
    summa += array[j];
    j++
}
document.write("Сумма членов массива: " + summa + "<br/>");

// задание 2,3
class book {
    nameBook;
    countPages;
    genre;
    autor;

    constructor(nameBook, countPages, genre, autor) {
        this.autor = autor;
        this.nameBook = nameBook;
        this.countPages = countPages;
        this.genre = genre;
    }
}

book1 = {nameBook: "Таинственный остров", countPages: 400, genre: "Фантастика"};
book2 = new book("2000 лье под водой", 300, "Фантастика ", "Жуль Верн");
console.log(book1);
console.log(book2);
//задание 4
let library = [];
book3 = new book("Java8", 1377, "Наука", "Герберт Шилдт");
book4 = new book("Том Соер", 500, "Приключения", "Марк Твен")
book5 = new book("Преврещение", 300, "Повесть", "Франц Кафка")
library.push(book1);
library.push(book2);
library.push(book3);
library.push(book4);
library.push(book5);
for (let i = 0; i < library.length; i++) {
    document.write("Книга называется: " + library[i].nameBook + " В ней количество страниц равное-" + library[i].countPages + " Жанр: " + library[i].genre + " Книгу написал: " + library[i].autor + "<br/>");
}
//задание 5
let width, height, s;
width = 10;
height = 23;
s = width * height;
document.write("Площадь прямоугольника: " + s + "см" + "<br/>");
//задание 6
let heigthC = 10;//sm
let dC = 400;//sm
const PI = 3.14;
let radius = dC / 2;
let vC = PI * (radius ** 2) * height
document.write("Обём цилиндра: " + vC + "смˆ2" + "<br/>");
//задание 7
let n = 3, m = 4, k;
k = Math.pow((n ** 2 + m ** 2), 0.5)
document.write("Гипотенуза треугольника равна: " + k + "см" + "<br/>");
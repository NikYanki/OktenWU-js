// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
document.getElementById('main_header').classList.add('dec2021');
// b) робить шириниу елементу ul 400px
for (let element of document.getElementsByTagName('ul')) {
    element.style.width = "400px";
    element.style.background = 'red';
}
// c) робить шириниу всіх елементів з класом linkList шириною 50%
for (let element of document.getElementsByClassName('linkList')) {
    element.style.width = "50%";
    element.style.background = 'pink';
}
// d) отримує текст який зберігається в елементі з класом listElement2
for (let element of document.getElementsByClassName('listElement2')) {
    console.log(element.innerText);
}
// e) отримує всі елементи li та змінює ім колір фону на сірий
for (let element of document.getElementsByTagName('li')) {
    console.log(element);
    element.style.background = 'gray';
}
// f) отримує всі елементи 'a' та додає їм клас anchor
for (let element of document.getElementsByTagName('a')) {
    element.classList.add('anchor');
}
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (let element of document.getElementsByTagName('a')) {
    if (element.innerHTML === 'link3') {
        element.style.fontSize = "40px";
    }
}
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (let element of document.getElementsByTagName('a')) {
    element.classList.add(`element_${Element.innerText}`);
}
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let color = prompt('Enter color:');
for (let element of document.getElementsByClassName('sub-header')) {
    element.style.background = color;
}
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let color1 = prompt('Enter color:');
for (let element of document.getElementsByClassName('sub-header')) {
    if (element.innerText === 'content 2 segment') {
        element.style.background = color1;
    }
}
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let text = prompt("Enter text");
for (let element of document.getElementsByClassName('content_1')) {
    element.innerText = text;
}
// l) отримати елементи p та змінити їм padding на 20px
for (let element of document.getElementsByTagName('p')) {
    element.style.padding = '20px';
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
for (let element of document.getElementsByClassName('text2')) {
    element.innerText = "Dec2021";
}
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
document.getElementById('main_header').classList.add('dec2021');
// b) робить шириниу елементу ul 400px
for (let Element of document.getElementsByTagName('ul')) {
    Element.style.width = "400px";
    Element.style.background = 'red';
}
// c) робить шириниу всіх елементів з класом linkList шириною 50%
for (let Element of document.getElementsByClassName('linkList')) {
    Element.style.width = "50%";
    Element.style.background = 'pink';
}
// d) отримує текст який зберігається в елементі з класом listElement2
for (let Element of document.getElementsByClassName('listElement2')) {
    console.log(Element.innerText);
}
// e) отримує всі елементи li та змінює ім колір фону на сірий
for (let Element of document.getElementsByTagName('li')) {
    console.log(Element);
    Element.style.background = 'gray';
}
// f) отримує всі елементи 'a' та додає їм клас anchor
for (let Element of document.getElementsByTagName('a')) {
    Element.classList.add('anchor');
}
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (let Element of document.getElementsByTagName('a')) {
    if (Element.innerHTML === 'link3') {
        Element.style.fontSize = "40px";
    }
}
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (let Element of document.getElementsByTagName('a')) {
    Element.classList.add(`element_${Element.innerText}`);
}
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let color = prompt('Enter color:');
for (let Element of document.getElementsByClassName('sub-header')) {
    Element.style.background = color;
}
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let color1 = prompt('Enter color:');
for (let Element of document.getElementsByClassName('sub-header')) {
    if (Element.innerText === 'content 2 segment') ;
    Element.style.background = color1;
}
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let text = prompt("Enter text");
for (let Element of document.getElementsByClassName('content_1')) {
    Element.innerText = text;
}
// l) отримати елементи p та змінити їм padding на 20px
for (let Element of document.getElementsByTagName('p')) {
    Element.style.padding = '20px';
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
for (let Element of document.getElementsByClassName('text2')) {
    Element.innerText = "Dec2021";
}
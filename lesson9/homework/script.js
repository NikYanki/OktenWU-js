// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let div1 = document.createElement('div');
div1.classList.add('wrap');
div1.classList.add('collapse');
div1.classList.add('alpha');
div1.classList.add('beta');
div1.style.background = 'green';
div1.style.color = 'yellow';
div1.style.fontSize = '25px'
div1.innerText = 'hello world'
document.body.append(div1);
let div2 = div1.cloneNode(true);
document.body.append(div2);

// - Є масив:
let words = ['Main', 'Products', 'About us', 'Contacts'];
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let ulElement = document.getElementsByClassName('menu')[0]
for (let word of words) {
    let liElement = document.createElement('li');
    liElement.innerText = word;
    ulElement.append(liElement)
}
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (let coursesAndDurationArrayElement of coursesAndDurationArray) {
    let divElement = document.createElement('div');
    divElement.innerText = `Title: ${coursesAndDurationArrayElement.title}. Month durations ${coursesAndDurationArrayElement.monthDuration}.`;
    document.body.appendChild(divElement);
}
// - Є масив
let courses = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (let coursesElement of courses) {
    let divElement = document.createElement('div');
    divElement.classList.add('item');
    let h1Element = document.createElement('h1');
    h1Element.classList.add('heading');
    h1Element.innerText = coursesElement.title;
    let pElement = document.createElement('p');
    pElement.classList.add('description')
    pElement.innerText = coursesElement.monthDuration;
    document.body.appendChild(divElement);
    divElement.append(h1Element, pElement);
}

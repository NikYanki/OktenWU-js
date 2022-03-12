//є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт
// потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на
//попередньому етапі.
let div = document.createElement('div');
div.setAttribute('id', 'users');
document.body.appendChild(div);
let fav = JSON.parse(localStorage.getItem('favorites', '')) || [];
for (let user of users) {
    let innerDiv = document.createElement('div');
    innerDiv.innerText = user.name + '  ';
    div.appendChild(innerDiv)
    let btn = document.createElement('button');
    innerDiv.appendChild(btn)
    btn.innerText = 'add';
    btn.addEventListener('click', () => {
        fav.push(user);
        localStorage.setItem('favorites', JSON.stringify(fav))
    })
}
let a = document.createElement('a');
a.innerText = 'favorites'
a.setAttribute('href', './favorites.html')
document.body.appendChild(a)
// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

// let form = document.createElement('form');
// document.body.appendChild(form);
// let inp1 = document.createElement('input');
// inp1.setAttribute('name', 'username');
// inp1.setAttribute('placeholder', 'name:')
// inp1.setAttribute('type', 'text')
// let inp2 = document.createElement('input');
// inp2.setAttribute('name', 'userage');
// inp2.setAttribute('placeholder', 'age:')
// inp2.setAttribute('type', 'number')
// let btn = document.createElement('button');
// btn.innerText = 'confirm';
// form.append(inp1, inp2, btn)
// form.onsubmit = (e) => {
//     e.preventDefault()
//     let name = e.target.username.value;
//     let age = e.target.userage.value;
//     let users ={nameInput:name, ageInput:age}
//     localStorage.setItem(name, JSON.stringify(users))
// }
// -створити форму з інпутами для model,type та volume автівки.
// при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let form = document.createElement('form');
document.body.appendChild(form);
let inp1 = document.createElement('input');
inp1.setAttribute('name', 'brand');
inp1.setAttribute('placeholder', 'Car brand')
inp1.setAttribute('type', 'text')
let inp2 = document.createElement('input');
inp2.setAttribute('name', 'type');
inp2.setAttribute('placeholder', 'Type engine')
inp2.setAttribute('type', 'text')
let inp3 = document.createElement('input');
inp3.setAttribute('name', 'volume');
inp3.setAttribute('placeholder', 'Volume engihe smˆ3')
inp3.setAttribute('type', 'number')
let btn = document.createElement('button');
btn.innerText = 'confirm';
form.append(inp1, inp2, inp3, btn)
let carsArr = JSON.parse(localStorage.getItem('cars')) || [];
form.onsubmit = (e) => {
    e.preventDefault()
    let brand = e.target.brand.value
    let type = e.target.type.value;
    let volume = e.target.volume.value;
    let car = {brand: brand, type: type, volume: volume}
    carsArr.push(car);
    localStorage.setItem('cars', JSON.stringify(carsArr))

}
console.log(localStorage.getItem(localStorage.key(0)))
let arr = localStorage.getItem(localStorage.key(0));
console.log(JSON.parse(arr))
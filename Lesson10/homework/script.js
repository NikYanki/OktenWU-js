// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку
// исчезал элемент с id="text".

// let div = document.createElement('div');
// div.setAttribute('id', 'text');
// div.style.width ='100px';
// div.style.height='100px';
// div.style.background='green';
// document.body.appendChild(div);
// let btn =document.createElement('button');
// btn.innerText='press';
// document.body.appendChild(btn);
// btn.addEventListener('click', ()=>{
//     document.getElementById('text').style.display='none'
// })

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let btn =document.createElement('button');
// btn.innerText='press';
// btn.classList.add('ghost')
// document.body.appendChild(btn);
// btn.addEventListener('click', ()=>{
//     document.getElementsByClassName('ghost')[0].style.display='none'
// })


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача

// let inp = document.createElement('input');
// inp.setAttribute('name', 'age');
// inp.setAttribute('placeholder', 'your age');
// document.body.appendChild(inp);
// let btn = document.createElement('button');
// btn.innerText = 'confirm';
// document.body.appendChild(btn);
// btn.addEventListener('click', ()=>{
//     let age = parseInt(inp.value);
//     if(age>=18){
//         document.write('you passed the test')
//         alert('проверка пройдена')
//     }else {
//         document.write('get out')
//         alert('проверка не пройдена Вам мало лет!!!')
//     }
// })


// - Создайте меню, которое раскрывается/сворачивается при клике

// let div = document.createElement('div');
// div.setAttribute('id', 'cars');
// div.classList.add('list')
// document.body.appendChild(div);
// let span = document.createElement('span');
// span.innerText = 'select car';
// span.setAttribute('class', 'title')
// div.appendChild(span);
// let ul = document.createElement('ul');
// div.appendChild(ul);
// for (let i = 0; i < 4; i++) {
//     let li = document.createElement('li')
//     ul.appendChild(li)
//     let a =document.createElement('a')
//     a.setAttribute('id', `brend${i + 1}`);
//     li.appendChild(a);
// }
// document.getElementById('brend1').innerText='honda'
// document.getElementById('brend1').setAttribute('href', 'https://www.honda.pl/cars.html?gclid=EAIaIQobChMIqqKuid-99gIVsEiRBR1VOgxGEAAYASAAEgLTB_D_BwE&gclsrc=aw.ds')
// document.getElementById('brend2').innerText='toyota'
// document.getElementById('brend2').setAttribute('href', 'https://toyotaastana.kz/?utm_source=google&utm_medium=cpc&utm_campaign=diler&utm_content=diler')
// document.getElementById('brend3').innerText='nissan'
// document.getElementById('brend3').setAttribute('href', 'https://www.nissan.pl/')
// document.getElementById('brend4').innerText='subaru'
// document.getElementById('brend4').setAttribute('href', 'https://www.subaru.pl/')
//
// let menuElements = document.getElementById('cars');
// let title = menuElements.querySelector('.title');
//
// title.onclick = function(){
//     menuElements.classList.toggle('open');
// }

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
let coments = [
    {title: 'ford', body: 'america'},
    {title: 'mazda', body: 'japan'},
    {title: 'opel', body: 'germany'},
    {title: 'kia', body: 'korea'},
    {title: 'jaguar', body: 'england'},
]
let divOutter = document.createElement('div');
for (let i = 0; i < coments.length; i++) {
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let btn = document.createElement('button');
    let hr = document.createElement('hr');

    h3.innerText = coments[i].title;
    p.innerHTML = coments[i].body;
    btn.innerHTML = 'close'

    btn.onclick = () => {
        p.setAttribute('id', `id${i}`)
        document.getElementById(`id${i}`).style.display = 'none'
    }
    div.append(h3, p, btn);
    divOutter.append(div, hr);
}
document.body.appendChild(divOutter)

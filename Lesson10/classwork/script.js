// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується
// та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.


// let div1 = document.createElement('div')
// document.body.appendChild(div1);
// let div2 = document.createElement('div');
// document.body.appendChild(div2);
//
// let form1 = document.createElement('form');
// form1.setAttribute('name', 'form1');
// div1.appendChild(form1);
//
// let form2 = document.createElement('form');
// form2.setAttribute('name', 'form2');
// div2.appendChild(form2);
//
// let input1 = document.createElement('input');
// input1.setAttribute('name', 'input1');
//
// let input2 = document.createElement('input');
// input2.setAttribute('name', 'input2');
//
// let input3 = document.createElement('input');
// input3.setAttribute('name', 'input3');
//
// let input4 = document.createElement('input');
// input4.setAttribute('name', 'input4');
//
// let button = document.createElement('button');
// button.innerText = 'press';
//
// document.body.appendChild(button);
//
// form1.append(input1,input2);
// form2.append(input3,input4);
//
//
// button.addEventListener('click', function (){
//     console.log(document.forms.form1.input1.value);
//     console.log(document.forms.form1.input2.value);
//     console.log(document.forms.form2.input3.value);
//     console.log(document.forms.form2.input4.value);
// })
//
//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// let inp1, inp2, inp3, btn, num1, num2, str;
// inp1 = document.createElement('input');
// document.body.append(inp1);
// inp2 = document.createElement('input');
// document.body.append(inp2);
// inp3 = document.createElement('input');
// document.body.append(inp3);
// btn = document.createElement('button');
// btn.innerText = "press";
// document.body.append(btn);
//
// btn.addEventListener('click', ()=>{
//     num1 = +inp1.value;
//     num2 = +inp2.value;
//     str = inp3.value;
//     console.log(typeof num1,typeof num2,typeof str)
// if(typeof num1==="number"&&typeof num2==="number"){
//     let tab = document.createElement('div');
//     document.body.append(tab)
//     for(let i =0; i<num1;i++){
//         let tr = document.createElement('div');
//         tr.style.display = 'flex';
//         tab.append(tr);
//         for(let j=0; j<num2; j++){
//             let td =document.createElement('div');
//             td.innerText = str;
//             td.style.width ='40px';
//             td.style.height ='30px';
//             td.style.border='1px black solid';
//             tr.append(td);
//         }
//
//     }
//
// }
// })


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку


// let badWords = ['Shit', 'Crap', 'Fuck', 'Nigger', 'Whore', 'Slut', 'Bitch', 'Freak', 'Douchebag', 'Gay', 'Faggot', 'Asshole', 'Prick', 'Dick', 'Cunt', 'Pussy', 'Sucker'];
// let inp = document.createElement('input');
// document.body.appendChild(inp);
// let btn = document.createElement('button');
// btn.innerText = 'press';
// document.body.appendChild(btn);
// btn.addEventListener('click', () => {
//     for (let badWord of badWords) {
//         let word = inp.value;
//         if (word.toLowerCase()===badWord.toLowerCase()) {
//             alert('don\'t swear')
//
//         }
//
//     }
// })


//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//
let badWords = ['Shit', 'Crap', 'Fuck', 'Nigger', 'Whore', 'Slut', 'Bitch', 'Freak', 'Douchebag', 'Gay', 'Faggot', 'Asshole', 'Prick', 'Dick', 'Cunt', 'Pussy', 'Sucker'];
let inp = document.createElement('input');
document.body.appendChild(inp);
let btn = document.createElement('button');
btn.innerText = 'press';
document.body.appendChild(btn);
btn.addEventListener('click', () => {
    for (let badWord of badWords) {
        let word = inp.value;
        if (word.toLowerCase().includes(badWord.toLowerCase())) {
            alert('don\'t swear')

        }

    }
})

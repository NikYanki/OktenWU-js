// let obj=fetch('https://jsonplaceholder.typicode.com/users/1').then(response => response.json())
// obj.then(obj=>obj)
// console.log(obj)


// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css,
// щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(responce => {
        let div = document.createElement('div');
        div.setAttribute('id', 'container');
        document.body.appendChild(div);
        for (let responceElement of responce) {
            let divInner = document.createElement('div');
            divInner.classList.add('inner');
            divInner.innerHTML = `<h3>ID: ${responceElement.id}</h3><h4>Title: ${responceElement.title}</h4><h5>Body: ${responceElement.body}</h5>`;
            div.appendChild(divInner);
        }
    })

// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(response =>response.json())
//     .then(responce=>{
//         let div =document.createElement('div');
//         div.setAttribute('class', 'container1');
//         document.body.appendChild(div);
//         for (let responceElement of responce) {
//             let divInner =document.createElement('div');
//             divInner.classList.add('inner1');
//             divInner.innerHTML = `
//                         <h3>ID: ${responceElement.id}</h3>
//                         <h4>Name: ${responceElement.name}</h4>
//                         <h5>Email: ${responceElement.email}</h5>
//                         <h6>Body: ${responceElement.body}</h6>
//                         `;
//             div.appendChild(divInner);
//         }
//     })
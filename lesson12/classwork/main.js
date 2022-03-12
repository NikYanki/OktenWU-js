// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
let wrapDiv = document.createElement('div');
wrapDiv.classList.add('wrapper');
document.body.appendChild(wrapDiv);
fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())
    .then(responses => {
        for (let respons of responses) {
            let div = document.createElement('div');
            div.setAttribute('class', 'outter_1');
            wrapDiv.appendChild(div);
            let div1 = document.createElement('div');
            div1.setAttribute('class', 'outter');
            div.appendChild(div1);
            div1.innerHTML =
                `<h2>id :${respons.id}</h2>
         <h5>title :${respons.title}</h5>
         <p>body :${respons.body}</p>
        `
            let btn = document.createElement('button');
            btn.innerText = 'get info';
            div1.appendChild(btn)
            btn.addEventListener('click', (e) => {
                fetch(`https://jsonplaceholder.typicode.com/posts/${respons.id}/comments`).then(obj => obj.json())
                    .then(obj => {
                        for (let objEl of obj) {
                            let innerDiv = document.createElement('div');
                            innerDiv.classList.add('inner');
                            div.appendChild(innerDiv)
                            innerDiv.innerHTML =
                                `<h3>ID: ${objEl.id}</h3>
                                 <h4>Name: ${objEl.name}</h4>
                                 <h5>Email: ${objEl.email}</h5>
                                 <h6>Body: ${objEl.body}</h6>`
                        }
                        btn.disabled = true;
                    })
            })
        }
    })
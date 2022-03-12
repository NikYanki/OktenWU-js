// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
// Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

// {address: {street: 'Kulas Light', suite: 'Apt. 556', city: 'Gwenborough', zipcode: '92998-3874', geo: {…}}
//     company: {name: 'Romaguera-Crona', catchPhrase: 'Multi-layered client-server neural-net', bs: 'harness real-time e-markets'}
//     email: "Sincere@april.biz"
//     id: 1
//     name: "Leanne Graham"
//     phone: "1-770-736-8031 x56442"
//     username: "Bret"
//     website: "hildegard.org"
// }

let outterwrapDiv = document.createElement('div');
outterwrapDiv.classList.add('outwrapper');
document.body.appendChild(outterwrapDiv);
fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
    .then(responses => {
        for (let respons of responses) {
            let wrapDiv = document.createElement('div');
            wrapDiv.classList.add('wrap');
            outterwrapDiv.appendChild(wrapDiv);
            let otrrerDiv = document.createElement('div');
            otrrerDiv.classList.add('outer');
            wrapDiv.appendChild(otrrerDiv);
            otrrerDiv.innerHTML = `
            <h2>id :${respons.id}</h2>
            <p>name : ${respons.name}</p>
            <p>username : ${respons.username}</p>`;
            let btn1 = document.createElement('button');
            otrrerDiv.appendChild(btn1);
            btn1.innerText = 'more informalion'
            btn1.addEventListener('click', (e) => {
                fetch('https://jsonplaceholder.typicode.com/users/' + respons.id + '/posts').then(response => response.json())
                    .then(obj1s => {
                        for (let obj1 of obj1s) {
                            let midwrapDiv = document.createElement('div')
                            midwrapDiv.classList.add('midwrap');
                            wrapDiv.appendChild(midwrapDiv)
                            let middleDiv = document.createElement('div');
                            midwrapDiv.appendChild(middleDiv);
                            middleDiv.setAttribute('class', 'middle')
                            middleDiv.innerHTML = `
                            <h4>userId :${obj1.userId}</h4>
                            <p>id :${obj1.id}</p>
                            <p>title :${obj1.title}</p>
                            <p>body :${obj1.body}</p>`
                            let btn2 = document.createElement('button');
                            btn2.innerText = 'more informations'
                            middleDiv.appendChild(btn2);
                            btn2.addEventListener('click', (e) => {
                                fetch(`https://jsonplaceholder.typicode.com/posts/${obj1.id}/comments`).then(responses => responses.json())
                                    .then(obj2s => {
                                        for (let obj2 of obj2s) {
                                            let innerDiv = document.createElement('div');
                                            innerDiv.classList.add('inner')
                                            innerDiv.innerHTML = `
                                            <h2>postId :${obj2.postId}</h2>
                                            <h4>"id":${obj2.id}</h4>
                                            <p>"name":${obj2.name}</p>
                                            <p>"email":${obj2.email}</p>
                                            <p>"body":${obj2.body} </p>`
                                            midwrapDiv.appendChild(innerDiv)
                                        }
                                        btn2.disabled = true
                                    })
                            })
                        }
                        btn1.disabled = true;
                    })
            })
        }
    })
function createElement(tagName, containerElement) {
    const element = document.createElement(tagName);
    containerElement.appendChild(element);
    return element
}

const outterwrapDiv = createElement('div', document.body)
let userId = [];
fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
    .then(responses => {
        for (const respons of responses) {
            const otrrerDiv = createElement('div', outterwrapDiv);
            otrrerDiv.classList.add('outer');
            otrrerDiv.innerHTML = `
            <h2>id :${respons.id}</h2>
            <h3>name : ${respons.name}</h3>`;
            const action = createElement('form', otrrerDiv);
            action.setAttribute('action', './user-details.html');
            const goTo = createElement('button', action);
            goTo.innerText = 'перейти';
            goTo.addEventListener('click', (e) => {

                userId.push(respons.id);
                localStorage.setItem('user_id', JSON.stringify(userId))
            })
            localStorage.clear()
        }
    })
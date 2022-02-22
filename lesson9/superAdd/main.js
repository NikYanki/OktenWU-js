let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати)
// їх в інший порожній масив.

// let arr= users.map(value => value.address)
// console.log(arr)
let arr1 = [];
for (let user of users) {
    arr1.push(user.address)
}
console.log(arr1)

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги
// document.createElement. Всі данні в одному блоці.
let outterDiv = document.createElement('div');
document.body.appendChild(outterDiv);
for (let user of users) {
    let middleDiv = document.createElement('div');
    middleDiv.innerText = `name ${user.name}, age ${user.age}, adrress ${user.address.country},${user.address.city},${user.address.street},${user.address.houseNumber}, status ${user.status}`
    outterDiv.appendChild(middleDiv);

}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги
// document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
let outterDiv1 = document.createElement('div');
document.body.appendChild(outterDiv1);
for (let user of users) {
    let middleDiv = document.createElement('div');
    outterDiv1.appendChild(middleDiv);
    for (let userKey in user) {
        if (typeof user[userKey] !== "object") {
            let innerDiv = document.createElement('div');
            innerDiv.innerText = `${userKey}: ${user[userKey]}`;
            middleDiv.appendChild(innerDiv);
        } else {
            let innerDiv = document.createElement('div');
            innerDiv.innerText = `${userKey}: ${user[userKey].country}, ${user[userKey].city}, ${user[userKey].street}, ${user[userKey].houseNumber},`;
            middleDiv.appendChild(innerDiv);
        }
    }
}


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги
// document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити
// окремим блоком, з блоками для кожної властивості
let outterDiv2 = document.createElement('div');
document.body.appendChild(outterDiv2);
for (let user of users) {
    let middleDiv = document.createElement('div');
    outterDiv2.appendChild(middleDiv);
    for (let userKey in user) {
        if (typeof user[userKey] !== "object") {
            let innerDiv = document.createElement('div');
            innerDiv.innerText = `${userKey}: ${user[userKey]}`;
            middleDiv.appendChild(innerDiv);
        } else {
            let innerDivAdr = document.createElement('div');
            innerDivAdr.innerText = userKey;
            middleDiv.appendChild(innerDivAdr);
            for (let addressKey in user.address) {
                let innerInDiv = document.createElement('div');
                innerInDiv.innerText = `${addressKey}: ${user.address[addressKey]}`
                innerDivAdr.appendChild(innerInDiv)
                innerInDiv.style.color = 'green'
            }
        }
    }
}


// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують
// тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li),
//     який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
//
//                            !не могу понять само условие задания!
//
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне
// правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];
let wrap = document.createElement("div");
wrap.classList.add('wrap');
document.body.appendChild(wrap);
for (let i = 0; i < rules.length; i++) {
    let rullDiv = document.createElement('div');
    rullDiv.classList.add(`rules`);
    rullDiv.classList.add(`rule${i + 1}`)
    wrap.appendChild(rullDiv);
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    h2.innerText = rules[i].title;
    p.innerText = rules[i].body;
    rullDiv.append(h2, p);
}
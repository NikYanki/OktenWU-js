// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
let obj = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
            lat: '-37.3159',
            lng: '81.1496'
        }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets'
    }
}

class Company {
    name;
    catchPhrase;
    bs;

    constructor(name, catchPhrase, bs) {
        this.name = name;
        this.catchPhrase = catchPhrase;
        this.bs = bs;
    }
}

class Geo {
    lat;
    lng;

    constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
}

class Adress {
    street;
    suite;
    city;
    zipcode;
    geo;

    constructor(street, suite, city, zipcode, geo,) {
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
        this.geo = geo;
    }
}

class User {
    id;
    name;
    username;
    email;
    address;
    phone;
    website;
    company;

    constructor(id, name, username, email, address, phone, website, company,) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
        this.website = website;
        this.company = company
    }

}

user2 = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', new Adress('Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', new Geo('-37.3159', '81.1496')), '1-770-736-8031 x56442', 'hildegard.org', new Company('Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets'));
console.log(user2)
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
class Tag {
    constructor(titleOfTag, action, attrs) {
        this.titleoftag = titleOfTag;
        this.action = action;
        this.attrs = attrs;
    }
}

let title1 = '<a>';
let action1 = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.';
let atribytes1 = [
    {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
    {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'},
    {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'},
];
a = new Tag(title1, action1, atribytes1);
console.log(a);

let title2 = '<div>';
let action2 = 'Тег <div> обычно используется для группировки крупных элементов,';
let atribytes2 = [
    {titleOfAttr: 'wrap', actionOfAttr: 'Tег <div> может бытьв качестве обёртки для пунктов списка определений'},
    {titleOfAttr: 'functions', actionOfAttr: 'Содержимым тега <div> может быть любой другой элемент HTML'},
];
div = new Tag(title2, action2, atribytes2);
console.log(div)
let title3 = '<h1>';
let action3 = 'Тег <h1> обозначает самый важный заголовок (заголовок верхнего уровня)';
let atribytes3 = [
    {titleOfAttr: 'title', actionOfAttr: 'обозначает самый важный заголовок'}

];
h1 = new Tag(title3, action3, atribytes3);
console.log(h1)

let title4 = '<span>'
let action4 = 'Тег <span> предназначен для определения строчных элементов документа.';
let atribytes4 = [
    {titleOfAttr: 'accesskey', actionOfAttr: 'Для этого тега доступны универсальные атрибуты и события.'},
];
span = new Tag(title4, action4, atribytes4);
console.log(span);
let title5 = '<input>';
let action5 = 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.';
let atribytes5 = [
    {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
    {
        titleOfAttr: 'accept',
        actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'
    },
    {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание изображения.'},
];
input = new Tag(title5, action5, atribytes5);
console.log(input);

let title6 = '<form>';
let action6 = 'Связывает поле с формой по её идентификатору.';
let atribytes6 = [
    {titleOfAttr: 'method', actionOfAttr: 'Метод протокола HTTP.'},
    {titleOfAttr: 'name', actionOfAttr: 'Имя формы.'},
    {titleOfAttr: 'novalidate', actionOfAttr: 'Отменяет встроенную проверку данных формы на корректность ввода.'},
];
input = new Tag(title6, action6, atribytes6);
console.log(input);

let title7 = '<option>';
let action7 = 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.';
let atribytes7 = [
    {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
    {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка.'},
    {titleOfAttr: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'},
];
option = new Tag(title7, action7, atribytes7);
console.log(option);

let title8 = '<select>';
let action8 = 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка.';
let atribytes8 = [
    {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
    {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
];
select = new Tag(title8, action8, atribytes8);
console.log(select);

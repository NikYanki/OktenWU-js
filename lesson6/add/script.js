// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
let str = 'наслаждение';
let cutString = (str, n) => {
    let arr = [];
    for (let i = n, j = 0; i < str.length, j < str.length; i += n, j += n) {
        let part = (str.substring(j, i))
        arr.push(part)
    }
    return arr
}
console.log(cutString(str, 3))
// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до
// знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
let str1 = 'someemail@gmail.com';
let str2 = 'someeMAIL@gmail.com';
let str3 = 'someeMAIL@i.ua';
let str4 = 'some.email@gmail.com';
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

let validator = (...args) => {
    let arr1 = [], arr2 = [], arr3 = []
    for (let arg of args) {
        if (!arr1.includes(arg.toLowerCase())) {
            arr1.push(arg)
        }

    }//прошла проверка на регистр
    for (let arr1Element of arr1) {
        if (arr1Element.indexOf("@") > 0 && arr1Element.indexOf("@") === arr1Element.lastIndexOf("@")) {
            arr2.push(arr1Element.split("@"))
        }
    }//прошла проверка на наличие @
    for (let elem of arr2) {
        if (!elem[0].includes('.') && elem[1].indexOf(".") >= 2) {
            arr3.push(elem.join("@"))
        }

    }//прошла проверка на запрещеные знаки и на нахождение точки.
    return arr3.toString()
}

console.log(validator(str1, str2, str3, str4))
// - є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
coursesArray.sort((a, b) => (b.modules.length - a.modules.length))
console.log(coursesArray);
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
let string = "Астрономия это наука о небесных объектах";
let count = (string, literal) => {
    let arr = [];
    for (let stringElement of string) {
        if (stringElement === literal) {
            arr.push(stringElement)
        }
    }
    return arr.length
}
console.log(count(string, "о"))
//
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
let str6 = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
let cutingString = (string, n) => {
    return string.split(" ").splice(0, n).join(' ')
}
console.log(cutingString(str6, 5))













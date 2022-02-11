// - Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let normalizeName = string => {
    let newArr = [];
    if (string.includes(".")) {
        let a = string.split(".")
        a.forEach((item) => {
            if (item) newArr.push(item);
        })
        console.log(newArr.join(' '))
    } else if (string.includes("-")) {
        console.log(string.replace("-", " ").replaceAll("-", ""))
    } else if (string.includes("_")) {
        let a = string.split("_")
        a.forEach((item) => {
            if (item) newArr.push(item);
        })
        console.log(newArr.join(' '))
    }
};
normalizeName(n1);
normalizeName(n2);
normalizeName(n3);

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let createRandomArray = (length, num) => {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * num));
    }
    return array;
};

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

let array = createRandomArray(10, 100);
console.log(array);
console.log(array.sort((a, b) => {
    return a - b;
}))
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
console.log(array.filter(value => value % 2 === 0))
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let array2 = createRandomArray(10, 50);
let array3 = array2.map(variable => variable.toString())
for (let array3Element of array3) {
    console.log(typeof array3Element)
}
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

let sortNums = (array, direction) => {
    if (direction === 'ascending') {
        let arr = array.sort((a, b) => {
            return a - b
        });
        return arr;
    } else if (direction === 'descending') {
        let arr = array.sort((a, b) => {
            return b - a
        });
        return arr;
    }
}
console.log(sortNums(array2, 'ascending'));
console.log(sortNums(array2, 'descending'))
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((a, b) => (a.monthDuration - b.monthDuration)))
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter(value => (value.monthDuration > 5)));

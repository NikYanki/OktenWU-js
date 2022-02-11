// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let showMax = (a, b, c) => {
    a >= b && a >= c ? console.log(a) : b >= a && b >= c ? console.log(b) : console.log(c);
}

showMax(6, 1, 4);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let showMin = (a, b, c) => {
    if (a <= b && a <= c) {
        console.log(a);
    } else if (b <= a && b <= c) {
        console.log(b);
    } else console.log(c);
}

showMin(-3, 1, -9);


// - створити функцію яка повертає найбільше число з масиву
let showMaxInArray = array => {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    console.log(max);
}

let array = [1, 2, 4, -5, 6, 7, 8];
showMaxInArray(array);

// - створити функцію яка повертає найменьше число з масиву


let showMinInArray = array => {
    array.sort((a, b) => a - b);
    console.log(array[0])
}

showMinInArray(array)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let showSumArrayWithArray = array => {
    let summa = 0;
    for (let arrayElement of array) {
        summa += arrayElement;
    }
    document.write("{ ")
    for (let i = 0; i < array.length; i++) {
        if (i !== (array.length - 1)) {
            document.write(array[i] + ", ")
        } else {
            document.write(array[i] + " ")
        }
    }
    document.write(`} -> ${summa}<br>`)
}

showSumArrayWithArray(array)

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let findSrArifmOfArray = array => {
    let result = 0;
    for (let arrayElement of array) {
        result += arrayElement;
    }
    result /= array.length;
    return result;
}

console.log(findSrArifmOfArray(array))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let findMaxMinVarArgs = (...arg) => {
    arg.sort((a, b) => a - b);
    console.log('max: ' + arg[arg.length - 1])
    return arg[0];
}

document.write(`min: ${findMaxMinVarArgs(4, 6, 8, 9, 0, 3, 1, -34)}<br>`)


// - створити функцію яка заповнює масив рандомними числами
let createArray = length => {
    let arr = Array(length);
    for (let i = 0; i < length; i++) {
        arr[i] = (Math.floor(Math.random() * 100));
    }
    return arr;
}

console.log(createArray(10));


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let createLimitedArray = (length, topLimit) => {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * topLimit));
    }
    return arr;
}

document.write(createLimitedArray(10, 2) + "<br>");

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let createReverseArray = array => {
    let arr = Array(array.length);
    for (let i = array.length - 1, j = 0; i >= 0; i--, j++) {
        arr[j] = array[i];
    }

    return arr;
}

console.log(array)
console.log(createReverseArray(array))
function showMax(a, b, c) {
    a >= b && a >= c ? console.log(a) : b >= a && b >= c ? console.log(b) : console.log(c);
}

showMax(4, 5, 6);

function showMin(a, b, c) {
    if (a <= b && a <= c) {
        console.log(a);
    } else if (b <= a && b <= c) {
        console.log(b);
    } else console.log(c);
}

showMin(-1, -9, 10);

function showMaxInArray(array) {
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

function showMinInArray(array) {
    array.sort((a, b) => a - b);
    console.log(array[0])
}

showMinInArray(array)

function showSumArray(array) {
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

showSumArray(array)

function findSrArifmOfArray(array) {
    let result = 0;
    for (let arrayElement of array) {
        result += arrayElement;
    }
    result /= array.length;
    return result;
}

console.log(findSrArifmOfArray(array))

function findMaxMinVarArgs(...arg) {
    arg.sort((a, b) => a - b);
    console.log('max: ' + arg[arg.length - 1])
    return arg[0];
}

document.write(`min: ${findMaxMinVarArgs(4, 6, 8, 9, 0, 3, 1, -34)}<br>`)

function createArray(length) {
    let arr = Array(length);
    for (let i = 0; i < length; i++) {
        arr[i] = (Math.floor(Math.random() * 100));
    }
    return arr;
}

document.write(createArray(10) + "<br>");

function createLimitedArray(length, topLimit) {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * topLimit));
    }
    return arr;
}

document.write(createLimitedArray(10, 2) + "<br>");

function createReverseArray(array) {
    let arr = Array(array.length);
    for (let i = array.length - 1, j = 0; i >= 0; i--, j++) {
        arr[j] = array[i];
    }

    return arr;
}

console.log(array)
console.log(createReverseArray(array))

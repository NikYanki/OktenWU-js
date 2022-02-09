function showOrConcatSgow(...arg) {// в java это были бы 2 overloading methods
    if (arg.length === 1) {
        document.write(arg[0]);
    } else {
        document.write(arg[0] + arg[1]);
    }
}

showOrConcatSgow("sf", "qdqefdw")

function foldArrays(array1, array2) {
    if (array1.length === array2.length) {
        let arr = Array(array1.length);
        for (let i = 0; i < array1.length; i++) {
            arr[i] = array1[i] + array2[i];
        }
        return arr
    } else {
        console.log("different arrays length")
    }
}

let array1 = [2, 4, 6];
let array2 = [5, 6, 2];
console.log(foldArrays(array1, array2))


let array3 = [{name: 'Dima', age: 13}, {model: 'Camry'}]

function returnKeys(array) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        let a = (Object.keys(array[i]));
        for (let j = 0; j < a.length; j++) {
            arr.push(a[j])
        }
    }
    return arr
}

console.log(returnKeys(array3))


function returnValue(array) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        let a = (Object.values(array[i]));
        for (let j = 0; j < a.length; j++) {
            arr.push(a[j])
        }
    }
    return arr
}

console.log(returnValue(array3))
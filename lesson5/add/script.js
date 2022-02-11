// - Дано натуральное число n. Выведите все числа от 1 до n.
let showCycle = (n) => {
    console.log(n)
    n--
    if (n === 0) {

    } else {
        showCycle(n)
    }
}

showCycle(11)

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
let showInterwal = (a, b) => {
    if (a > b) {
        console.log(b);
        b++
        if (a === b) {

        } else {
            showInterwal(a, b)
        }
    } else if (a < b) {
        console.log(a);
        a++
        if (a === b) {

        } else {
            showInterwal(a, b)
        }
    }
}
showInterwal(4, 9)
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

let array = [2, 4, 6, 8, 10, 12];

let changeRidth = (array, i) => {
    if (i < array.length) {
        let a = array[i];
        array[i] = array[i + 1];
        array[i + 1] = a
        console.log(array)
    } else {
        console.log('i>=array.length')
    }
}
changeRidth(array, 3);

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
let array2 = [0, 1, 2, 3, 4, 0, 1, 2, 3, 4];
let sortZeroInArray = array => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            array.splice(i, 1);
            let a = 0;
            array.push(a)
        }
    }
    console.log(array);
}
sortZeroInArray(array2)
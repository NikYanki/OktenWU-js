//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//1. перебрати його циклом while
let i = 0;
while (i < array.length) {
    console.log(array[i]);
    i++;
}
//2. перебрати його циклом for
for (let j = 0; j < array.length; j++) {
    console.log(array[j]);
}
//3. перебрати циклом while та вивести  числа тільки з непарним індексом
i = 0;
while (i < array.length) {
    if (i % 2 === 1) {
        console.log(array[i]);
    }
    i++;
}
//4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let j = 0; j < array.length; j++) {
    if (j % 2 === 1) {
        console.log(array[j]);
    }
}
//5. перебрати циклом while та вивести  числа тільки парні  значення
i = 0
while (i < array.length) {
    if (array[i] % 2 === 0) {
        console.log(array[i]);
    }
    i++;
}
//6. перебрати циклом for та вивести  числа тільки парні  значення
for (let j = 0; j < array.length; j++) {
    if (array[j] % 2 === 0) {
        console.log(array[j]);
    }
}
//7. замінити кожне число кратне 3 на слово "okten"
i = 0
while (i < array.length) {
    if (array[i] % 3 === 0) {
        array[i] = "Okten";
    }
    console.log(array[i]);
    i++;
}
//8. вивести масив в зворотньому порядку.
for (j = array.length - 1; j >= 0; j--) {
    document.write(array[j] + "</br>")
}
//9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
i = array.length - 1;
while (i >= 0) {
    console.log(array[i]);
    i--;
}


for (let j = array.length - 1; j >= 0; j--) {
    console.log(array[j]);
}


i = array.length - 1;
while (i >= 0) {
    if (i % 2 === 1) {
        console.log(array[i]);
    }
    i--;
}


for (let j = array.length - 1; j >= 0; j--) {
    if (j % 2 === 1) {
        console.log(array[j]);
    }
}
array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
i = array.length - 1;
while (i >= 0) {
    if (array[i] % 2 === 0) {
        console.log(array[i]);
    }
    i--;
}


for (let j = array.length - 1; j >= 0; j--) {
    if (array[j] % 2 === 0) {
        console.log(array[j]);
    }
}


i = array.length - 1;
while (i >= 0) {
    if (array[i] % 3 === 0) {
        array[i] = "Okten";
    }
    console.log(array[i]);
    i--;
}
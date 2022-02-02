//Задача 1
let num1 = 22;
let num2 = 22;
if (num1 > num2) {
    document.write(num1 + "<br/>")
} else if (num1 < num2) {
    document.write(num2 + "<br/>")
} else {
    document.write("Введеные числа равны" + "<br/>")
}
//Задача 2
let flatNumber = 49;
(flatNumber > 0 && flatNumber <= 90) ? (flatNumber <= 48) ? (flatNumber <= 20) ? document.write("Первый подезд" + "<br/>") : document.write("Второй подезд" + "<br/>") : document.write("Третий подезд" + "<br/>") : document.write("Что-то не так" + "<br/>");
//Задача 3
let number = 10
switch (number) {
    case 10:
        document.write("верно" + "<br/>")
        break
    default:
        document.write("не верно" + "<br/>")
        break
}
//Задача 4
let x;
switch (typeof x) {
    case "number":
        console.log(1);
        break
    case "string":
        console.log(2);
        break
    case "boolean":
        console.log(-3);
        break
    case "object":
        console.log(-3);
        break
    default:
        console.log("xxx")
        break
}
//задача 5
let temperatura = 15;
(temperatura > 50 || temperatura < -30) ? document.write("Такого у нас не бывает" + "<br/>") : (temperatura > 10 && temperatura < 22) ? document.write(" Мы сегодня идем учиться" + "<br/>") : document.write("Сидим дома и учимся online" + "<br/>");
//задача 6
let trying = 9;
if (typeof trying === "number") {
    switch (trying) {
        case 1:
            document.write("вы выиграли телефон" + "<br/>")
            break
        case 2:
            document.write("вы выиграли ляща" + "<br/>")
            break
        case 3:
            document.write("вы проиглали" + "<br/>")
            break
        case 4:
            document.write("вы выиграли 100$" + "<br/>")
            break
        case 5:
            document.write("вы проиграли" + "<br/>")
            break
        default:
            document.write("не такое число" + "<br/>")
            break
    }
} else {
    document.write("не число" + "<br/>")
}
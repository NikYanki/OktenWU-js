function dof() {
    let minute = Number(document.getElementById("num").value);
    let exit1 = 'первая четверть часа';
    let exit2 = 'вторая четверть часа';
    let exit3 = 'третья четверть часа';
    let exit4 = 'последняя четверть часа';
    let exit5 = 'что-то не так';
    if (minute > 0 && minute <= 15) {
        document.getElementById("out").innerHTML = exit1;
    } else if (minute > 15 && minute <= 30) {
        document.getElementById("out").innerHTML = exit2;
    } else if (minute > 30 && minute <= 45) {
        document.getElementById("out").innerHTML = exit3;
    } else if (minute > 45 && minute <= 59) {
        document.getElementById("out").innerHTML = exit4;
    } else {
        document.getElementById("out").innerHTML = exit5;
    }
}

function dog() {
    let day = Number(document.getElementById("num1").value);
    let exit1 = 'первая декада';
    let exit2 = 'вторая декада';
    let exit3 = 'третья декада';
    let exit4 = 'что-то не так';
    if (day > 0 && day <= 10) {
        document.getElementById("out2").innerHTML = exit1;
    } else if (day > 10 && day <= 20) {
        document.getElementById("out2").innerHTML = exit2;
    } else if (day > 20 && day <= 31) {
        document.getElementById("out2").innerHTML = exit3;
    } else {
        document.getElementById("out2").innerHTML = exit4;
    }
}

function doh() {
    let number = Number(document.getElementById("num3").value);
    let exit1 = 'верно';
    let exit2 = 'не верно';
    (!!number) ? document.getElementById("out3").innerHTML = exit1 : document.getElementById("out3").innerHTML = exit2;

}

function doi() {
    let a = Number(document.getElementById("num4").value);
    let exit1 = 'введенное число равно нолю';
    let exit2 = 'введенное число не является нолем';
    if (!!!a) {
        document.getElementById("out4").innerHTML = exit1;
    } else {
        document.getElementById("out4").innerHTML = exit2;
    }
}

function dof() {
    let dayWeek = Number(document.getElementById("num5").value);
    let exit1 = 'Сегодня нужно идти на работу.';
    let exit2 = 'Урра выходной!!!';
    let exit3 = 'Что-то пошло не так';
    switch (dayWeek) {
        case 1:
            document.getElementById("out5").innerHTML = exit1;
            break;
        case 2:
            document.getElementById("out5").innerHTML = exit1;
            break;
        case 3:
            document.getElementById("out5").innerHTML = exit1;
            break;
        case 4:
            document.getElementById("out5").innerHTML = exit1;
            break;
        case 5:
            document.getElementById("out5").innerHTML = exit1;
            break;
        case 6:
            document.getElementById("out5").innerHTML = exit2;
            break;
        case 7:
            document.getElementById("out5").innerHTML = exit2;
            break;
        default:
            document.getElementById("out5").innerHTML = exit3;
    }
}

function doj() {
    let days = Number(document.getElementById("num6").value);
    let exit1 = 'год высокосный';
    let exit2 = 'год не высокосный';
    let exit3 = 'что-то пошло не так';
    (days % 4 === 2 && days > 364 && days < 367) ? document.getElementById("out6").innerHTML = exit1 : (days % 4 === 1 && days > 364 && days < 367) ? document.getElementById("out6").innerHTML = exit2 : document.getElementById("out6").innerHTML = exit3;

}

function dok() {
    let a = String(document.getElementById("num7").value);
    let exit1 = 'Верно';
    let exit2 = 'Не верно';
    let b = 'ECMAScript';
    if (a === b) {
        document.getElementById("out7").innerHTML = exit1;
    } else {
        document.getElementById("out7").innerHTML = exit2;
    }
}
// - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
console.log(document.getElementById('content').innerHTML);
// -- отримує текст з блоку з id "rules"
let rules = document.getElementById('rules').innerText;
console.log(rules);
// -- замініть текст параграфа з id 'content' на будь-який інший
document.getElementById('content').innerHTML = 'It`s was good tilm';
// -- замініть текст параграфа з id 'rules' на будь-який інший
document.getElementById('content').innerHTML = 'правила для того чтобы их нарушать!';
// -- змініть кожному елементу колір фону на червоний
for (let element of document.body.children) {
    element.style.background = 'red';
}
// -- змініть кожному елементу колір тексту на синій
for (let element of document.children) {
    element.style.color = 'blue';
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(document.getElementById('rules').classList);
// -- поміняти колір тексту у всіх елементів fc_rules на червоний(сделаю желтый чтоб их было видно)
for (let element of document.getElementsByClassName('fc_rules')) {
    element.style.color = 'yellow';
}

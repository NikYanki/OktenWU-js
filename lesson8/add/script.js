// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.
// html в окремий масив. масив вивести в консоль

let arr = [];
let pusherClassNameToArr = (element) => {

    let children = element.children;
    for (let child of children) {
        arr.push(child.className);
        pusherClassNameToArr(child)
    }
}
pusherClassNameToArr(document)
console.log(arr.filter(value => value !== ''))
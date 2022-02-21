// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.
// html в окремий масив. масив вивести в консоль

let arr = [];
let pusherClassNameToArr = (element) => {

    let children = element.children;
    for (let child of children) {
        let a = (child.className.split(' '));

        for (let aElement of a) {
            arr.push(aElement)
        }

        pusherClassNameToArr(child)
    }
}
pusherClassNameToArr(document)
arr = arr.filter(value => value !== '')
console.log(arr)
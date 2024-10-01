console.log("#5");

let arr51 : string[] = ['1', '2', '3'];
let arr52 : string[] = ['a', 'b', 'c'];
console.log(arr51);
console.log(arr52);

function arrPlusArr(arr51 : string[], arr52 : string[]) {
    let newArr : string[] = [];

    for (let i : number = 0;  i < arr51.length; i++) {
        newArr.push(arr51[i]);
        newArr.push(arr52[i]);
    }

    return newArr;
}

console.log(arrPlusArr(arr51, arr52));
console.log("#5");

let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];
console.log(arr1);
console.log(arr2);

function arrPlusArr(arr1, arr2) {
    let newArr = [];

    for (let i = 0;  i < arr1.length; i++) {
        newArr.push(arr1[i]);
        newArr.push(arr2[i]);
    }

    return newArr;
}

console.log(arrPlusArr(arr1, arr2));
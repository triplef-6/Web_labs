function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
    }
console.log("#4");

let arr1 = [];
for (let i = 0; i < 10; i++) {
    arr1.push(randomInteger(1, 100));
}
console.log(arr1);

let arr2 = [];
for  (let i = 0; i < 10; i++) {
    let str = String(arr1[i]);
    for (let j = 0; j < str.length; j++) {
        if (str[j] == "5") {
            arr2.push(arr1[i]);
            break;
        }
    }
}
console.log(arr2);
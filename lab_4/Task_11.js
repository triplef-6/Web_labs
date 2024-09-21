function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
    }
console.log("#11");

let arr1 = [];
for (let i = 0; i < 8; i++) {
    arr1.push(randomInteger(-100, 100));
}
console.log(arr1);

let arr2 = [];
for (let a of arr1) {
    if (a > 0 && a % 2 == 0) { // положительные И чётные 
        arr2.push(a);
    }
}
console.log(arr2);
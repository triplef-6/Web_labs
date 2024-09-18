function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
    }
console.log("#9");

let arr = [];
for (let i = 0; i < 8; i++) {
    arr.push(randomInteger(0, 50));
}
console.log(arr);

let sum1 = 0;
for (let i = 0; i < 4; i++) {
    sum1 +=  arr[i];
}
let sum2 = 0;
for (let i = 4; i < 8; i++) {
    sum2 += arr[i];
}
console.log(sum1);
console.log(sum2);
console.log(sum1 / sum2);

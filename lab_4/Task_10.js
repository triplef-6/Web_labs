function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
    }
console.log("#10");

let arr = [];
for (let i = 0; i < 8; i++) {
    arr.push(randomInteger(-100, 100));
}
console.log(arr);

let n = 0;
for (let a of arr) {
    let str = String(a);
    if (str.includes("1") != false && a < 0) {
        n++;
    }
}
console.log(n);
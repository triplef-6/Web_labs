function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
    }
console.log("#6");

let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(randomInteger(1, 100));
}
console.log(arr);

arr.sort((a, b) => b - a);
console.log(arr);
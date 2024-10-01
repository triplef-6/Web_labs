function randomInt9(min: number, max: number): number {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
    }
console.log("#9");

let arr9 : number[] = [];
for (let i : number = 0; i < 8; i++) {
    arr9.push(randomInt9(0, 50));
}
console.log(arr9);

let sum91 : number = 0;
for (let i = 0; i < 4; i++) {
    sum91 +=  arr9[i];
}
let sum92 : number = 0;
for (let i = 4; i < 8; i++) {
    sum92 += arr9[i];
}
console.log(sum91);
console.log(sum92);
console.log(sum91 / sum92);
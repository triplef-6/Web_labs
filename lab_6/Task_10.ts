function randomInt10(min: number, max: number): number {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
    }
console.log("#10");

let arr10 : number[] = [];
for (let i : number = 0; i < 8; i++) {
    arr10.push(randomInt10(-100, 100));
}
console.log(arr10);
    
let n10 : number = 0;
for (let a of arr10) {
    let str10 : string = String(a);
    if (str10.includes("1") != false && a < 0) {
        n10++;
    }
}
console.log(n10);
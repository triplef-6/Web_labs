function randomInt11(min: number, max: number): number {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
    }
console.log("#11");

let arr111 : number[] = [];
for (let i : number = 0; i < 8; i++) {
    arr111.push(randomInt11(-100, 100));
}
console.log(arr111);

let arr112 : number[] = [];
for (let a of arr111) {
    if (a > 0 && a % 2 == 0) { // положительные И чётные 
        arr112.push(a);
    }
}
console.log(arr112);
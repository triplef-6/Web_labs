function randomInt4(min: number, max: number): number {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
    }
console.log("#4");

let arr41 : number[] = [];
for (let i : number = 0; i < 10; i++) {
    arr41.push(randomInt4(1, 100));
}
console.log(arr41);

let arr42 : number[] = [];
for  (let i = 0; i < 10; i++) {
    let str4 : string = String(arr41[i]);
    for (let j = 0; j < str4.length; j++) {
        if (str4[j] == "5") {
            arr42.push(arr41[i]);
            break;
        }
    }
}
console.log(arr42);
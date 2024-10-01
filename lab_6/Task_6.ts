function randomInt6(min: number, max: number): number {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
    }
console.log("#6");

let arr6 : number[] = [];
for (let i : number = 0; i < 10; i++) {
    arr6.push(randomInt6(1, 100));
}
console.log(arr6);

arr6.sort((a, b) => b - a);
console.log(arr6);
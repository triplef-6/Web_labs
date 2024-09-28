function randomInt6(min: number, max: number) : number {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
    }
console.log("Задание 6");

let n61 : number = randomInt6(1, 100);
let n62 : number = randomInt6(1, 100);
console.log("Число1:",  n61);
console.log("Число2:",  n62);

console.log("Остаток от деления первого числа на второе:", n61 % n62);
console.log("Сумма чисел:", n61 + n62);
console.log("Произведение чисел:",  n61 * n62);
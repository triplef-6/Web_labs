function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
    }
console.log("Задание 6");

let n1 = randomInteger(1, 100);
let n2 = randomInteger(1, 100);
console.log("Число1:",  n1);
console.log("Число2:",  n2);

// let a1 = 27;
// let a2 = 38;
// console.log(a1 + a2);

console.log("Остаток от деления первого числа на второе:", n1 % n2);
console.log("Сумма чисел:", n1 + n2);
console.log("Произведение чисел:",  n1 * n2);
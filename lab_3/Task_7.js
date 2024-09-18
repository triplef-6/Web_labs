function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
    }
console.log("Задание 7");

let n1 = randomInteger(1, 100);
let n2 = randomInteger(1, 100);
let n3 = randomInteger(1, 100);
let n4 = randomInteger(1, 100);
console.log("Число1:", n1);
console.log("Число2:", n2);
console.log("Число3:", n3);
console.log("Число4:", n4);

console.log("Среднее арифметическое:",  (n1 + n2 + n3 + n4) / 4);
console.log("Сумма квадратов:",  n1**2 + n2**2 + n3**2 + n4**2);
console.log("Наибольшее число:",  Math.max(n1, n2, n3, n4));
console.log("Наименьшее число:",  Math.min(n1, n2, n3, n4));
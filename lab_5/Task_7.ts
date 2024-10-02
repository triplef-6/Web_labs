function randomInt7(min: number, max: number) : number {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
    }
console.log("Задание 7");

let n71 : number = randomInt7(1, 100);
let n72 : number = randomInt7(1, 100);
let n73 : number = randomInt7(1, 100);
let n74 : number = randomInt7(1, 100);
console.log("Число1:", n71);
console.log("Число2:", n72);
console.log("Число3:", n73);
console.log("Число4:", n74);

console.log("Среднее арифметическое:",  (n71 + n72 + n73 + n74) / 4);
console.log("Сумма квадратов:",  n71**2 - n72**2 - n73**2 - n74**2);
console.log("Наибольшее число:",  Math.max(n71, n72, n73, n74));
console.log("Наименьшее число:",  Math.min(n71, n72, n73, n74));

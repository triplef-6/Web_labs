function randomInt5(min: number, max: number) : number {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
    }
console.log("Задание 5");

let n51 : number = randomInt5(1, 100);
let n52 : number = randomInt5(1, 100);
console.log("Число1:",  n51);
console.log("Число2:",  n52);

if (String(n51)[0] == String(n52)[0]) {
    console.log("Первые цифры чисел совпадают");
} else {
    console.log("Первые цифры чисел не совпадают");
}
if (n51 % n52 == 0) {
    console.log("Первое число без остатка делится на второе");
} else {
    console.log("Первое число без остатка не делится на второе");
}
if (n51 > n52) {
    console.log("Первое число больше второго");
} else if (n52 > n51) {
    console.log("Второе число больше первого");
} else {
    console.log("Числа равны");
}
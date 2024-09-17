function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
    }
console.log("Задание 5");

let n1 = randomInteger(1, 100);
let n2 = randomInteger(1, 100);
console.log("Число1:",  n1);
console.log("Число2:",  n2);

if (String(n1)[0] == String(n2)[0]) {
    console.log("Первые цифры чисел совпадают");
} else {
    console.log("Первые цифры чисел не совпадают");
}
if (n1 % n2 == 0) {
    console.log("Первое число без остатка делится на второе");
} else {
    console.log("Первое число без остатка не делится на второе");
}
if (n1 > n2) {
    console.log("Первое число больше второго");
} else if (n2 > n1) {
    console.log("Второе число больше первого");
} else {
    console.log("Числа равны");
}
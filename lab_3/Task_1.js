function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
    }
console.log("Задание 1");

let n = randomInteger(-100, 100);
console.log("Число:", n);

if (n > 0) {
    console.log("Положительное");
} else {
    console.log("Отрицательное");
}
if (n % 2 == 0) {
    console.log("Чётное");
} else {
    console.log("Нечётное");
}

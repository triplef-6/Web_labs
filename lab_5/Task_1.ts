function randomInt1(min: number, max: number): number {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
    }
console.log("Задание 1");

let a1 : number = randomInt1(-100, 100);
console.log("Число:", a1);

if (a1 > 0) {
    console.log("Неотрицательное");
} else {
    console.log("Отрицательное");
}
if (a1 % 2 == 0) {
    console.log("Чётное");
} else {
    console.log("Нечётное");
}
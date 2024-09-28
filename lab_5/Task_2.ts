function randomInt2(min: number, max: number) : number {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
    }
console.log("Задание 2");

let a2 : number = randomInt2(1, 10000);
console.log("Число:", a2);

let a2_str : string = String(a2);
console.log("Первая цифра:", a2_str[0]);
console.log("Последняя цифра:", a2_str[a2_str.length - 1]);
console.log("Сумма первой и последней цифры:", parseInt(a2_str[0]) + parseInt(a2_str[a2_str.length - 1]));
console.log("Количество цифр в числе:", a2_str.length);
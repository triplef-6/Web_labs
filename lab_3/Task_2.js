function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
    }
console.log("Задание 2");

let n = randomInteger(1, 10000);
console.log("Число:", n);

let n_str = String(n);
console.log("Первая цифра:", n_str[0]);
console.log("Последняя цифра:", n_str[n_str.length - 1]);
console.log("Сумма первой и последней цифры:", parseInt(n_str[0]) + parseInt(n_str[n_str.length - 1]));
console.log("Количество цифр в числе:", n_str.length);





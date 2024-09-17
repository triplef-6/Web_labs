console.log("Задание 3");

let str = "rkvmkdfmbp";
console.log("Строка:", str);

console.log("Длина строки:", str.length);
console.log("Последний символ:", str[str.length - 1]);
let str_r = "";
for (let i = str.length - 1;  i >= 0; i--) {
    str_r = str_r + str[i];
}
console.log("Строка наоборот:",  str_r);

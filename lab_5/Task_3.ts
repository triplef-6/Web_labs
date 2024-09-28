console.log("Задание 3");

let str3 : string = "sdjbvsjkdvb";
console.log("Строка:", str3);

console.log("Длина строки:", str3.length);
console.log("Последний символ:", str3[str3.length - 1]);
let str_r : string = "";
for (let i = str3.length - 1;  i >= 0; i--) {
    str_r += str3[i];
}
console.log("Строка наоборот:",  str_r);
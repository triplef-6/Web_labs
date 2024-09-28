console.log("Задание 4");

let str41 : string = "jkcbjkv";
let str42 : string = "jlnwejknw jw jw w vko";
console.log("Строка1:", str41);
console.log("Строка2:", str42);

let str12 : string= str41 + '&' + str42;
console.log("Строка1 & Строка2:", str12);
if (str41.length > str42.length) {
    console.log("Самая длинная строка:", str41);
} else if (str42.length > str41.length) {
    console.log("Самая длинная строка:", str42);
} 
console.log("Задание 4");

let str1 = "rkvmkdfmbp";
let str2 = "vkovkkps vko";
console.log("Строка1:", str1);
console.log("Строка2:", str2);

let str12 = str1 + '&' + str2;
console.log("Строка1 & Строка2:", str12);
if (str1.length > str2.length) {
    console.log("Самая длинная строка:", str1);
} else if (str2.length > str1.length) {
    console.log("Самая длинная строка:", str2);
} 


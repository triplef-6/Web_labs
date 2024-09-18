console.log("#3");

let str = '023m0df0dfg0';
let arr = [];
for (let i = 0;  i < str.length; i++) {
    if (str[i] === '0') {
        arr.push(i);
    }
}
console.log(arr);
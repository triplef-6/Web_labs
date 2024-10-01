console.log("#3");

let str3 : string= '023m0df0dfg0';
let arr3 : number[] = [];
for (let i : number = 0;  i < str3.length; i++) {
    if (str3[i] === '0') {
        arr3.push(i);
    }
}
console.log(arr3);
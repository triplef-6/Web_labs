console.log("#12");

let str = "jiej89fj8fj48kvm";
console.log(str);

let n = 0;
for (let i = 0; i < str.length;  i++) {
    if (str[i] >= '0' && str[i] <= '9') {
        if (n == 0) {
            console.log(i + 1);
        }
        n = i + 1;
    }
}
console.log(n);

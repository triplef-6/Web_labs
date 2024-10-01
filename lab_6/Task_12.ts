console.log("#12");

let str12 : string = "jkv2113jsbvjdb42424vjkbvjls24dkl";
console.log(str12);

let n12 : number = 0;
for (let i : number = 0; i < str12.length;  i++) {
    if (str12[i] >= '0' && str12[i] <= '9') {
        if (n12 == 0) {
            console.log(i + 1);
        }
        n12 = i + 1;
    }
}
console.log(n12);
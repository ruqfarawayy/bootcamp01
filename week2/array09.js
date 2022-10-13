let a = 1;
let b = 2;

console.log("Sebelum Swap");
console.log("Nilai a:" + a);
console.log("Nilai b:" + b);

[a, b] = [b, a];
console.log("Setelah Swap");
console.log("Nilai a:" + a);
console.log("Nilai b:" + b);
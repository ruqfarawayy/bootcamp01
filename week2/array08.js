// masih di destruktur array dengan ecma script 5

var a = 1;
var b = 2;
var temp;

console.log("Sebelum Swap");
console.log("Nilai a:" + a);
console.log("Nilai b:" + b);

temp = a;
a = b;
b = temp;

console.log("Setelah Swap");
console.log("Nilai a:" + a);
console.log("Nilai b:" + b);
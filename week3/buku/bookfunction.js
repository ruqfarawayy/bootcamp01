// Cara untuk mencari bilangan absolut
// const abs = function abs(x) {
//     return x > 0
//            ? x
//            : x === 0
//            ? 0
//            : - x;
// }

// console.log(abs(-5));

const absolute = function abs(x) {
    return x >= 0 ? x : - x;
};

console.log(absolute(5))


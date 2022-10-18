const bilangan = [1, 2, 13, 25, 17, 8, 4]

// const urut = bilangan.sort((a,b) => (a-b));

// console.log(urut);

const pangkat = bilangan.map(i => {
    return i**2
});

// menggunakan function anonymous
// const pangkat = bilangan.map(function (a) {
//     let c = 2;
//     return a**2 + c;
// })

// const pangkat = bilangan.map((a) => {
//     let c = 2;
//     return a**2 + c;
// })

console.log(pangkat);
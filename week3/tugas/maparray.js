const bilangan = [3, 5, 7, 8, 2, 4]

// const pangkat = bilangan.map(i => i**2);

// menggunakan function anonymous
// const pangkat = bilangan.map(function (a) {
//     let c = 2;
//     return a**2 + c;
// })

const pangkat = bilangan.map( (a) => {
    let c = 2;
    return a**2 + c;
})

console.log(pangkat);
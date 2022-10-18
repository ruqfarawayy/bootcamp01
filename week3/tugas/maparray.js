const bilangan = [3, 5, 7, 8, 2, 4]

// const pangkat = bilangan.map(i => i**2);

const pangkat = bilangan.map(function (a,b) {
    let c = 2;
    return a**b + c;
})

console.log(pangkat);
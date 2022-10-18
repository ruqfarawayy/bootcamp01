const bilangan = [3, 5, 7, 8, 2, 4]

// const pangkat = bilangan.map(i => i**2);

const pangkat = bilangan.map(function (i){
    return i**2;
})
console.log(pangkat);

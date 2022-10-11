let x = 15;

function perulangan(x) {
    for (let i = 1 ; i <= x; i++) {
        if (i%2 == 0){
            console.log(`${i} adalah bilangan genap`);
        } else {
            console.log(`${i} adalah bilangan ganjil`);
        }
    }
};

perulangan(x);
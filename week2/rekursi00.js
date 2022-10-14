function rekursi (limit) {
    let mundur = ''
    for (let i = limit; i >= 1; i-- ) {
        mundur += '\n' + i;
    };
    return mundur;
}

console.log(rekursi(5));


function hitungMundur(batas) {
    let x = batas;
    do {
        console.log(x);
        x--;
    } while (x > 0);
}

hitungMundur(10);
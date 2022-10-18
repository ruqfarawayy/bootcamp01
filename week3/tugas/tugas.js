const bilangan = [2, 7, 15, 24, 19, 9, 5, 34];

// input : angka array positif
// output : Variabel berisi penjumlahan seluruh elemen array
function totalArr (num) {
    let total = 0;
    for (let i = 0; i < num.length; i++ ) {
        total += num[i];
    }
    return total;
}

// console.log(totalArr(bilangan));


//input : array angka positif
// output : array angka positif berurutan dari kecil ke besar
function urutan (arr) {
    const urutin = arr.sort(a, b => a - b);
}

// urutan(bilangan);

// input : array angka positif
// output : array angka prima
function bilanganPrima (arr) {
    temp = [];
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1 || arr[i] == 2){
        temp.push(arr[i]);
        }
    }
    return urutan (temp);
};

console.log(bilanganPrima(bilangan));

// mencari indeks dari sebuah array dengan diketahui element yang tertera
// input => buku
// output => 0

let barang = ["Buku", "Pulpen", "Penggaris"];

function posisi(i) {
    for (let index in barang) {
        if (i == barang[index]){
            return index;
        }
    }
}

console.log(posisi("Buku"));


// kalau di balik beginilah hasilnya

function dimana(i) {
    for (let index in barang) {
        if (i == index){
            return barang[index] + " Indeksnya adalah => " + index;
        }
    }
}

console.log(dimana(0));
 

 
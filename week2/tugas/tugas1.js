// mencari indeks dari sebuah array dengan diketahui element yang tertera
// input => buku
// output => 0

let barang = ["Buku", "Pulpen", "Penggaris"]

function posisi(i) {
    for (let index in barang) {
        if (i == barang[index]){
            return barang[index];
        }
    }
}

console.log(posisi("Penggaris"));


// kalau di balik beginilah hasilnya

function dimana(i) {
    for (let index in barang) {
        if (i == index){
            return barang[index] + "=>" + index;
        }
    }
}

console.log(posisi(1));
 

 
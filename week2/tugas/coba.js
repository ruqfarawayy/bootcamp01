let barang = ["Buku", "Pulpen", "Penggaris"];

function posisi(string) {
    for (let index = 0; index < barang.length; index++) {
        if (barang[index] == string){
            return index;
        }
    }
}

console.log(posisi("Buku"));
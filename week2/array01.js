// cara mengubah data dengan menggunakan index
let buah = ["Semangka", "Durian", "Anggur"];
let sayur = ["kangkung", "Lobak", "Sawi"];
buah[2] = "Jeruk";
console.log(buah);
console.log(sayur);

//concat = menggabungkan 2 array yang berbeda
let makanan = buah.concat(sayur);
console.log(makanan);

// cara menambah satu elemen array ke index paling akhir seperti halnya push
buah[buah.length] = "Sirsak";
console.log(buah);

//push() = menambahkan satu elemen ke paling belakang array
buah.push("Nangka");
console.log(buah);

//pop() = menghapus elemen paling akhir dalam baris array
buah.pop();
console.log(buah);

//shift() = menghilangkan elemen pertama dalam baris array
buah.shift();
console.log(buah);

//unshift = cara menambahkan elemen ke index paling depan
buah.unshift("Rambutan");
console.log(buah);

//splice = sebuah method untuk menambahkan elemen 
buah.splice(2,0, "Kurma", "Zakar")
console.log(buah);
// 2 adalah index posisi dimana elemen akan di tambahkan
// 0 adalah elemen yang akan dihapus setelah elemen yang sudah ditambahkan
// "Kurma", "Zakar" adalah elemen baru yang akan ditambahkan 

//slice = sebuah method untuk memotong array dijadikan baris array baru
sayur.slice(2);
console.log(sayur);





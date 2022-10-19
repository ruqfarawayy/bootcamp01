// membuat objek pada javascript 
// 1. Object Literal
// let mahasiswa = {
//     nama: "Faruq",
//     energy: 10,
//     makan: function(porsi) {
//         this.energy = this.energy + porsi;
//         console.log(`halo ${this.nama} Selamat Makan`);
//     }
// };

// 2. Function Declaration
// function Mahasiswa(nama, energy) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energy = energy;

//     mahasiswa.makan = function (porsi) {
//         this.energy += porsi;
//         console.log(`Halo ${this.nama} Selamat makan`);
//     }
//     mahasiswa.main = function (jam) {
//         this.energy -= jam;
//         console.log(`Hay ${this.nama} Selamat Bermain`);
//     }
//     return mahasiswa; // kalo pake function declaration harus ada yang di return
// }

// let faruq = Mahasiswa("Faruq", 25);
 
// 3. Constructor Function (Keyword new)

function Mahasiswa(nama, energy) {
    this.nama = nama;
    this.energy = energy;

    this.makan = function (porsi) {
        this.energy += porsi;
        console.log(`Halo ${this.nama} Selamat makan`);
    }
    this.main = function (jam) {
        this.energy -= jam;
        console.log(`Hay ${this.nama} Selamat Bermain`);
    }
    // kalo pake constructor function ngga perlu harus ada yang di return
}

let faruq = new Mahasiswa('Faruqqq',25); // hanya saja perlu menambahkan new di depan function Mahasiswanya.

// 4. Object create


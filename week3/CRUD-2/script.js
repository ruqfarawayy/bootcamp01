import * as tambah from "./js/add.js";
import * as data from "./js/data.js";
import * as read from "./js/tampil.js";

// JSON.parse(localStorage.getItem('profiles'));

tambah.btnSimpan;

read.tampilData(data.profiles);

// localStorage.setItem('profiles', JSON.stringify([{nik: 2141312389, nama: "Ganda", age: 34}]));
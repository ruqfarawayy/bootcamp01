import * as data from "./data";
import * as tampil from "./tampil";

let btnSimpan = document.getElementById('btn-simpan');
btnSimpan.addEventListener("click", simpan)

function simpan () {
    let nikInput = document.getElementById('tambahNik');
    let namaInput = document.getElementById('tambahNama');
    let ageInput = document.getElementById('tambahUsia');

    data.profiles.push({
        nik:nikInput.value,
        nama:namaInput.value,
        age: parseInt(ageInput.value),
    });

    tampil.tampilData(data.profiles);
    nikInput.value = '';
    namaInput.value = '';
    ageInput.value = '';
};
    
export {btnSimpan};

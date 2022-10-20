let btnSimpan = document.getElementById('btn-simpan');

btnSimpan.addEventListener("click", simpan)

function simpan () {
    tambah.tambahData();
}
function tambahData() {
    let nikInput = document.getElementById('tambahNik');
    let namaInput = document.getElementById('tambahNama');
    let ageInput = document.getElementById('tambahUsia');

    profiles.push({
        nik:nikInput.value,
        nama:namaInput.value,
        age: parseInt(ageInput.value),
    });
    tampilData(profiles);
    nikInput.value = ''
    namaInput.value = ''
    ageInput.value = ''
};

module.exports = {tambahData};

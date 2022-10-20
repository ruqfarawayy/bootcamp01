

function simpan (profiles) {
    let nikInput = document.getElementById('tambahNik');
    let namaInput = document.getElementById('tambahNama');
    let ageInput = document.getElementById('tambahUsia');

   profiles.push({
        nik:nikInput.value,
        nama:namaInput.value,
        age: parseInt(ageInput.value),
    });

    nikInput.value = '';
    namaInput.value = '';
    ageInput.value = '';
};
    
export {simpan};

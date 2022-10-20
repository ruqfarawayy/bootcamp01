const cari = (i) => profiles.find(element => element[i] === i);

function selectData (i) {
    // console.log("select data", nik)
    // console.log(cari(nik));
    let nikEdit = document.getElementById('ubahNik');
    let namaEdit = document.getElementById('ubahNama');
    let ageEdit = document.getElementById('ubahUsia');
    let idEdit = document.getElementById('ubahID');
    // let selected_data = cari(i);

    nikEdit.value = profiles[i].nik;
    namaEdit.value = profiles[i].nama;
    ageEdit.value = profiles[i].age;
    idEdit.value = i;
}


function ubahData() {
    let nikEdit = document.getElementById('ubahNik');
    let namaEdit = document.getElementById('ubahNama');
    let ageEdit = document.getElementById('ubahUsia');
    let idEdit = document.getElementById('ubahID');
    
     
    profiles[idEdit.value].nik = nikEdit.value;
    profiles[idEdit.value].nama = namaEdit.value;
    profiles[idEdit.value].age = ageEdit.value;
    tampilData(profiles);
}

module.exports = {selectData, ubahData};
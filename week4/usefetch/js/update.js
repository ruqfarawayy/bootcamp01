// const cari = (i) => profiles.find(element => element[i] === i);
import * as tampil from './tampilData.js'

async function selectData (i) {
    const req = await fetch('http://104.248.154.192:3005/person/' + i);
    const response = await req.json();
    let profiles = response.data;
    // console.log(profiles);
    
    let nikEdit = document.getElementById('ubahNik');
    let namaEdit = document.getElementById('ubahNama');
    let alamatEdit = document.getElementById('ubahAlamat');
    let idEdit = document.getElementById('ubahID');
    // let selected_data = cari(i);

    // id.value = profiles[i].id;
    nikEdit.value = profiles.nik;
    namaEdit.value = profiles.nama;
    alamatEdit.value = profiles.alamat;
    idEdit.value = i;
}


async function ubahData() {
    let nikEdit = document.getElementById('ubahNik');
    let namaEdit = document.getElementById('ubahNama');
    let alamatEdit = document.getElementById('ubahAlamat');
    let idEdit = document.getElementById('ubahID');
    
    // console.log(idEdit.value)

    const put = await fetch(`http://104.248.154.192:3005/person/${idEdit.value}`,
    {
        method: 'PUT',
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify({nik: nikEdit.value, nama: namaEdit.value, alamat: alamatEdit.value})
    }
    );
    
const response = await put.json();
const userData = response.data;
tampil.tampilData(userData);


    // const url = await fetch(`http://104.248.154.192:3005/person/${idEdit}`);
    // const response = await url.json();
    // let profileData = response.data;
    // console.log(profileData);

    // profiles[idEdit.value].nik = nikEdit.value;
    // profiles[idEdit.value].nama = namaEdit.value;
    // profiles[idEdit.value].alamat = alamatEdit.value;

    
}

export {selectData, ubahData};
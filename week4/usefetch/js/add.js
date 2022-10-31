import * as tampil from './tampilData.js';

function simpan () {
    let nikInputObj = document.getElementById('tambahNik');
    let namaInputObj = document.getElementById('tambahNama');
    let addressInputObj = document.getElementById('tambahAlamat');

    let nikInput = nikInputObj.value;
    let namaInput = namaInputObj.value;
    let addressInput = addressInputObj.value;


//    profiles.push({
//         nik:nikInput.value,
//         nama:namaInput.value,
//         alamat:addressInput.value,
//     });

    nikInputObj.value = '';
    namaInputObj.value = '';
    addressInputObj.value = '';

    (async () => {
        const post = await fetch('http://104.248.154.192:3005/person',
        {
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({nik: nikInput, nama: namaInput, alamat: addressInput})
        }
        );
        
    const response = await post.json();
    const userData = response.data;
    tampil.tampilData(userData);
    })();
};
    
export {simpan};

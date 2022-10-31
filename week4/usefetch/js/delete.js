import * as tampil from './tampilData.js'

async function delData(id) {
    const del = await fetch('http://104.248.154.192:3005/person/'+ id,
    {
        method: 'DELETE',
    });
    const responseDel = await del.json();
    // console.log('hapus nii')
    tampil.tampilData();
};

export { delData };
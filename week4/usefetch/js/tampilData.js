function tampilData(profileData) {
    let tBody = document.getElementById('printData');  
    tBody.innerHTML = "";
    // console.log(tBody);
    for (let i in profileData) {
        let nik = profileData[i].nik;
        let nama = profileData[i].nama;
        let alamat = profileData[i].alamat;
        let tRow = `<tr>
                    <th>${parseInt(i) + 1}</th>
                    <td>${nik}</td>
                    <td>${nama}</td>
                    <td>${alamat}</td>
                    <td>
                        <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#ubahData" data-edit="${i}">Ubah</button>
                        <button class="btn btn-primary btnDel" type="button" data-del="${i}">Hapus</button>
                    </td>
                </tr>`;
        tBody.innerHTML += tRow;
    };
};

export { tampilData };

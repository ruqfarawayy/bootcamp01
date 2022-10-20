import * as tambah from "../CRUD-2/js/add";

let profiles = [{
    nik: 33022657891,
    nama: "Supratman",
    age: 18,
},
{
    nik : 330298178290,
    nama : "Warisun",
    age : 21,
}];

// JSON.parse(localStorage.getItem('profiles'));


function tampilData(profileData) {
    let tBody = document.getElementById('printData')  
    tBody.innerHTML = "";
    // console.log(tBody);
    for (let i in profileData) {
        let nik = profileData[i].nik;
        let nama = profileData[i].nama;
        let age = profileData[i].age;
        let tRow = `<tr>
                    <th>${parseInt(i) + 1}</th>
                    <td>${nik}</td>
                    <td>${nama}</td>
                    <td>${age}</td>
                    <td>
                        <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#ubahData" onclick="selectData(${i})">Ubah</button>
                        <button class="btn btn-primary" type="button" onclick="delData(${i})">Hapus</button>
                    </td>
                </tr>`;
        tBody.innerHTML += tRow;
    };
}

tampilData(profiles);





// localStorage.setItem('profiles', JSON.stringify([{nik: 2141312389, nama: "Ganda", age: 34}]));
import * as tambah from "./js/add.js";
import * as data from "./js/data.js";

// console.log(data.profiles);

// JSON.parse(localStorage.getItem('profiles'));
let btnSimpan = document.getElementById('btn-simpan');
btnSimpan.addEventListener("click", () => {
    tambah.simpan(data.profiles);
    tampilData(data.profiles);
} );


// btnDelete.addEventListener("click")
// btnDelete.addEventListener("click", () => {
//     console.log("hapus yaaaa");
// } );

function tampilData(profileData) {
    let tBody = document.getElementById('printData');  
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
                        <button class="btn btn-primary btnDel" type="button" data-id="${i}">Hapus</button>
                    </td>
                </tr>`;
        tBody.innerHTML += tRow;
    };
};


tampilData(data.profiles);

// let btnDelete = document.querySelectorAll('.btnDel');
// btnDelete.addEventListener("click", (e) => {
//     console.log("heheehe", e)
// });


let btnDelete = Array.from(document.getElementsByClassName('btnDel'));
btnDelete.forEach(del => {
    del.addEventListener("click", (e)=> {
        let id = e.getAttribute("data-id");
        console.log(id);
    });
});
// localStorage.setItem('profiles', JSON.stringify([{nik: 2141312389, nama: "Ganda", age: 34}]));
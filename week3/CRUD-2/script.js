import * as tambah from "./js/add.js";
import * as data from "./js/data.js";
import * as hapus from "./js/delete.js";
import * as update from "./js/update.js";
import * as warn from "./js/alert.js";

// console.log(data.profiles);

// JSON.parse(localStorage.getItem('profiles'));
let btnSimpan = document.getElementById('btn-simpan');
btnSimpan.addEventListener("click", () => {
    try {
    tambah.simpan(data.profiles);
    tampilData(data.profiles);
    warn.alertWarn("Berhasil Menambahkan", "success");
    }
    catch(e){
        console.log(e.message);
    }
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
                        <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#ubahData" data-edit="${i}">Ubah</button>
                        <button class="btn btn-primary btnDel" type="button" data-del="${i}">Hapus</button>
                    </td>
                </tr>`;
        tBody.innerHTML += tRow;
    };
};


tampilData(data.profiles);

let parrentDel = document.getElementById('printData')
parrentDel.addEventListener("click", (e) => {
    // console.log(e.srcElement.getAttribute("data-del"));
   try {
    if (e.srcElement.hasAttribute("data-del")){
        let id = e.srcElement.getAttribute("data-del");
        hapus.delData(id, data.profiles);
        tampilData(data.profiles);
        warn.alertWarn("Berhasil Menghapus", "danger");
    };
   }
   catch (e) {
    console.log(e);
   }
});

let parrentEdit = document.getElementById('printData')
parrentEdit.addEventListener("click", (y) => {
   try {
    if (y.srcElement.hasAttribute("data-edit")){
        let index = y.srcElement.getAttribute("data-edit");
        update.selectData(index, data.profiles);
        tampilData(data.profiles);
        
    }
   }
   catch (e) {
    warn.alertWarn(e.message);
   }
});

let btnUbah = document.getElementById('btnUbah');
    btnUbah.addEventListener("click", () => {
        update.ubahData(data.profiles);
        tampilData(data.profiles);
    });

    
let sortAscend = document.getElementById('sortDataAscend');
    sortAscend.addEventListener("click", ()=> {
        let sortedAsc = data.profiles.sort((a,b) => a.nik - b.nik);
        tampilData(sortedAsc);
        // sort.sortArr("sortDataAscend", data.profiles);
        // tampilData(data.profiles);
    });

let sortDesc = document.getElementById('sortDataDesc');
    sortDesc.addEventListener("click", () => {
        let sortedDesc = data.profiles.sort((a,b) => b.nik - a.nik);
        tampilData(sortedDesc);
        // sort.sortArr("sortDataDesc", data.profiles);
        // tampilData(data.profiles);
    })
// let btnDelete = document.querySelectorAll('.btnDel');
// btnDelete.addEventListener("click", (e) => {
//     console.log("heheehe", e)
// })


// let btnDelete = Array.from(document.getElementsByClassName('btnDel'));
// btnDelete.forEach(del => {
//     del.addEventListener("click", (e)=> {
//         let id = e.getAttribute("data-id");
//         console.log(id);
//     });
// });



// localStorage.setItem('profiles', JSON.stringify([{nik: 2141312389, nama: "Ganda", age: 34}]));
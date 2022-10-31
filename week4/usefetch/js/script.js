import * as tambah from "./add.js";
// import * as data from "./dataProfiles/data.js";
import * as hapus from "./delete.js";
import * as update from "./update.js";
import * as warn from "./alert.js";
import * as tampil from "./tampilData.js"
 



// loadData();

//     .then(response => response.json())
//     .then(response => {
//         // console.log(response.data);
//         tampil.tampilData(response.data);
//     });
// // } catch (e){
//     console.log(e);
// }
// console.log(response.data);

// JSON.parse(localStorage.getItem('profiles'));



let btnSimpan = document.getElementById('btn-simpan');
btnSimpan.addEventListener("click", () => {
    try {
    tambah.simpan();
    // tampil.tampilData();
    // console.log('harusnya udah tampil');
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


let parrentDel = document.getElementById('printData')
parrentDel.addEventListener("click", (e) => {
    // console.log(e.srcElement.getAttribute("data-del"));
   try {
    if (e.srcElement.hasAttribute("data-del")){
        let id = e.srcElement.getAttribute("data-del");
        // console.log(id)
        hapus.delData(id);
        warn.alertWarn("Berhasil Menghapus", "success");
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
        update.selectData(index);

        // console.log(index);
    }
   }
   catch (e) {
    warn.alertWarn(e.message);
   }
});

let btnUbah = document.getElementById('btnUbah');
    btnUbah.addEventListener("click", () => {
        update.ubahData();
    });

    
let sortAscend = document.getElementById('sortDataAscend');
    sortAscend.addEventListener("click", ()=> {
        let sortedAsc = response.data.sort((a,b) => a.nik - b.nik);
        tampilData(sortedAsc);
        // sort.sortArr("sortDataAscend", response.data);
        // tampilData(response.data);
    });

let sortDesc = document.getElementById('sortDataDesc');
    sortDesc.addEventListener("click", () => {
        let sortedDesc = response.data.sort((a,b) => b.nik - a.nik);
        tampilData(sortedDesc);
        // sort.sortArr("sortDataDesc", response.data);
        // tampilData(response.data);
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
tampil.tampilData();
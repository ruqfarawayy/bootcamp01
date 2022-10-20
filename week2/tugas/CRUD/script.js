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

function delData(i) {
    // console.log(i);
    profiles.splice(i,1);
    tampilData();
}

function tambahData() {
    let nikInput = document.getElementById('tambahNik');
    let namaInput = document.getElementById('tambahNama');
    let ageInput = document.getElementById('tambahUsia');

    profiles.push({
        nik:nikInput.value,
        nama:namaInput.value,
        age: parseInt(ageInput.value),
    });
    tampilData(profiles);
    nikInput.value = ''
    namaInput.value = ''
    ageInput.value = ''
}
const sortArr = (sortType, arr) => sortType === 'asc' ? arr.sort( (a,b) => a.age - b.age) : arr.sort((a,b) => b.age - a.age);

function sortData(order){
   let sorted = sortArr(order, profiles)
    tampilData(sorted);
}



tampilData(profiles);

// localStorage.setItem('profiles', JSON.stringify([{nik: 2141312389, nama: "Ganda", age: 34}]));
const user = {
    nama: 'Raden Sudirman',
    tanggalLahir: '1916-01-24',
    TempatLahir: 'karangjati',
    kebangsaan: 'Indonesia',
    'Jenis Kelamin': 'Laki-Laki',
    pahlawan: true,
    null: 'Tipe Data Null',
    undefined: 'Tipe Data undefined',
    true: 'Tipe Data Boolean',
    false: 'Tipe Data Boolean',
    'berat-badan': 75,
    '1orang': true,
};

console.log(`Halo, nama saya ${user.nama}`);
console.log(`Saya Tinggal di ${user.TempatLahir}`);
console.log(`Saya seorang ${user['Jenis Kelamin']}`);
console.log(`Berat saya ${user['berat-badan']} Kg`);
console.log(`Saya berasal dari ${user['kebangsaan']}`);
console.log(`Pernah ke semarang? ${user.null}`);



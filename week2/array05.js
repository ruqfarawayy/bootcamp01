// spread untuk objek
// bila menggabungkan 2 objek maka hasilnya juga objek, bila yang di gabungkan 2 array maka jadinya adalah array
const obj1 = { firstName: 'Obi-Wan', Age:30 };
const obj2 = { lastName: 'Kenobi', gender:'M'};

const newObj = {...obj1, ...obj2};

console.log(newObj);
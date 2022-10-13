// let barang = ["Buku", "Pulpen", "Penggaris"];

// function posisi(string) {
//     for (let index = 0; index < barang.length; index++) {
//         if (barang[index] == string){
//             return index;
//         }
//     }
// }

// console.log(posisi("Buku"));

// let items = ['buku', 'pensil', 'penggaris'];
// let searchKey = 'pensil';

// const findIndex2 = function (array, searchKey) {
//     let indexFound = "Kosong Wehh";
//     for (let i in array) {
//         if (array[i] == searchKey) {
//             indexFound = i;
//         }
//     }
//     return indexFound;
// }

// console.log(findIndex2(items, 'Lemari'));

// let nums = [1, 3, 5, 4, 6, 10, 9, 24, 8, 7, 66];

// const findMulOf = (array, num) => {
//     let arrayAnswer = [];
//     for (let i in array) {
//         if (array[i] % num == 0) {
//             arrayAnswer.push(array[i]);
//         }
//     }

//     return arrayAnswer;
// }

// console.log(findMulOf(nums, 3));

let buah = ["Semangka", "Durian", "Anggur"];

delete buah[1];


const profile = {
    firstName:"Puan",
    lastName: "Maharani",
    age:18,
}

// delete profile.firstName;

delete profile['lastName'];

console.log(profile);
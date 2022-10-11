const profile = {
    firstName:"John",
    lastName: "Doe",
    age:18,
}

// const firstName = profile.firstName
// const lastName = profile.lastName
// const age = profile.age

// cara mempersingkat pembuatan variabel dengan key didalam objek syaratnya adalah key dan nama variabelnya harus sama

// const {firstName, lastName, age} = profile;

// console.log(firstName, lastName, age);

let firstName = "Dimas";
let age = 20;

//Menginisialisasi nilai baru dari destructuring objek
({firstName, age} = profile);

console.log(firstName);
console.log(age);
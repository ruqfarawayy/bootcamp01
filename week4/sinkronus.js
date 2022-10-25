// Synchronous callback = blocking code
// codenya di jalanin satu persatu

let profiles = [
    {
    nik: 33022657891,
    nama: "Supratman",
    age: 18,
},
{
    nik : 330298178290,
    nama : "Warisun",
    age : 21,
}];

console.log("Halo");
profiles.forEach(p => console.log(p.nik));
console.log("Kemarilah");
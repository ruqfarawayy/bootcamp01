//spread
// bisa juga digunakan untuk menggabungkan kedua objek menjadi objek baru menjadi satu objek

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donnut"];

//menjadikan objek baru menjadi array 2 dimensi 
const allFavorites = [favorites, others];

console.log(allFavorites);

//menjadikan objek baru menjadi array 1 dimensi
const allFavoritess = [...favorites, ...others];

console.log(allFavoritess);
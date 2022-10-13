// Destruktur array kedalam variabel baru

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
// const [firstFood, secondFood, thirdFood, fourthFood] = favorites;

// console.log(firstFood);
// console.log(secondFood);
// console.log(thirdFood);
// console.log(fourthFood);

// mendestruktur element tertentu dari sebuah array dan memasukannya kedalam variabel baru.
// , (comma) adalah penentu length mana yang akan dia assign

const [, , , thirdFood ] = favorites

console.log(thirdFood);
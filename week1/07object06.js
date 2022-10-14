const profile = {
    firstName:"John",
    lastName: "Doe",
    age:18,
}

// const {firstName, lastName, age, isMale} = profile;

const {firstName, lastName, age, isMale = true} = profile;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(isMale);
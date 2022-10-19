// try {
//     nonExistentFunction();
// } catch (errorVariable) {
//     console.log(errorVariable);
// }

// Example using

let arr = [1, 2, 3, 4, 5];

try {
    console.log(getElement(arr, 4));
} 
catch (e) {
    console.log(e.message);
}
console.log("The program continued executing!");
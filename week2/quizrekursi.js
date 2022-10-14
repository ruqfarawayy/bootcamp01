// membuat function faktorial

// const factorial = angka => {
//     let hasil = 1
//     for (let i = 1; i <= angka; i++){
//         hasil *= i;
//     }
//     return hasil;
// }

// console.log(factorial(9));

let pemfaktoran = input => {
    if (input == 1) {
        return 1;
    }
    else {
        return input * pemfaktoran(input-1);
    }
}

console.log(pemfaktoran(5));

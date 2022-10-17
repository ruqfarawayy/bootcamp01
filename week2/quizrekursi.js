// membuat function faktorial
// 1 Make cara iteratif programing
const factorial = angka => {
    let hasil = 1
    for (let i = 1; i <= angka; i++){
        hasil *= i;
    }
    return hasil;
}

console.log(factorial(9));

// 2. make fungsional programming
let pemfaktoran = input => {
    if (input == 1) {
        return 1;
    }
    else {
        return input * pemfaktoran(input-1);
    }
}

console.log(pemfaktoran(5));

//3. make fungsional programming tapi make ternary condition
const faktorisasi = masukan => {
    return masukan == 0 ? 1 : masukan * faktorisasi(masukan-1);
}

console.log(faktorisasi(5))
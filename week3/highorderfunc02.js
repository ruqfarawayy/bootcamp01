const power3 = genPow(3);

function genPow(power) {
    return function multipy(number) {
        return number ** power;
    }
}

console.log(power3(10));

//function expression tidak selamanya annonymous